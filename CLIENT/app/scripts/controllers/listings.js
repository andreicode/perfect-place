'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingsCtrl
 * @description
 * # ListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingsCtrl', function ($scope, $rootScope, listings) {

        $scope.loading = true;

        $scope.listings = [];

        var filters = {
            page: 0,
        };

        listings.getAll(filters).then(function (response) {

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

            listings.getAll(filters).then(function (response) {

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

            listings.getAll(filters).then(function (response) {

                $scope.listings = $scope.listings.concat(response.data.listings);

                $scope.loading = false;

            }, function (err) {

                console.log(err);
                $scope.loading = false;

            });

        };


    });
