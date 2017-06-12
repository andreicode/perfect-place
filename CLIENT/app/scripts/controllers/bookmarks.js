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

            console.log(response);

            $scope.listings = response.data.bookmarks;

        })

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        $scope.removeBookmark = function (listing, index) {


            bookmark.remove(listing.id).then(function () {

                $scope.listings.splice(index, 1);

            }, function (err) {

                console.log(err);
                listing.book = true;

            });

        }




    });
