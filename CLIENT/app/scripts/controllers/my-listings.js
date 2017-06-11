'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MyListingsCtrl
 * @description
 * # MyListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MyListingsCtrl', function ($scope, $rootScope, $mdDialog, listings, $location) {

        $scope.loading = true;

        $scope.listings = [];

        var filters = {
            page: 0
        }

        $scope.addListing = function (ev) {

            $mdDialog.show({
                controller: 'AddListingCtrl',
                templateUrl: 'views/add-listing.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        listings.getMy().then(function (response) {

            $scope.listings = response.data.listings;

            $scope.loading = false;

        }, function (err) {

            console.log(err);

            $scope.loading = false;

        });

        $rootScope.$on('filter', function (filter, value) {

            filters['page'] = 0;

            if (value.filter !== 'search') {

                filters['order'] = value.filter;
                filters['orderType'] = value.value;

            } else {

                filters['search'] = value.value;

            }

            $scope.loading = true;

            listings.getMy(filters).then(function (response) {

                $scope.listings = response.data.listings;

                $scope.loading = false;

            }, function (err) {

                console.log(err);

                $scope.loading = false;

            });

        });

        $scope.loadMore = function () {

            if ($scope.loading) { return; }

            filters['page'] += 9;

            $scope.loading = true;

            listings.getMy(filters).then(function (response) {

                $scope.listings = $scope.listings.concat(response.data.listings);

                $scope.loading = false;

            }, function (err) {

                console.log(err);
                $scope.loading = false;

            });

        };

        $scope.moreDetails = function (id) {

            console.log(id);

            $location.path('/listing/' + id);

        }


    });
