'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:BookmarksCtrl
 * @description
 * # BookmarksCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('BookmarksCtrl', function ($scope, $auth, $http, API_URL, bookmark) {

        $scope.listings = [];

        $http({
            method: 'GET',
            url: API_URL + 'bookmark/all'
        }).then(function (response) {

            if (!response.data.bookmarks || !response.data.bookmarks.length) {

                $scope.noData = true;
                return;

            }

            $scope.listings = response.data.bookmarks;

        })

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        $scope.removeBookmark = function (listing, index) {


            bookmark.remove(listing.id).then(function () {

                $scope.listings.splice(index, 1);

                if (!$scope.listings.length) {

                    $scope.noData = true;

                }

            }, function (err) {

                console.log(err);
                listing.book = true;

            });

        }




    });
