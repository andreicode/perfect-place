'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingsCtrl
 * @description
 * # ListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingsCtrl', function ($auth, $scope, $rootScope, listings, $location, bookmark) {

        $scope.loading = true;

        $scope.listings = [];

        var filters = {
            page: 0,
        };

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
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

        $scope.moreDetails = function (id) {

            $location.path('/listing/' + id);

        }

        $scope.addBookmark = function (listing) {

            listing.book = true;

            bookmark.add(listing.id).then(function () {

            }, function (err) {

                console.log(err);
                listing.book = false;

            });

        }

        $scope.removeBookmark = function (listing) {

            listing.book = false;

            bookmark.remove(listing.id).then(function () {

            }, function (err) {

                console.log(err);
                listing.book = true;

            });

        }





    });
