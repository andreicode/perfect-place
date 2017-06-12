'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:BookmarksCtrl
 * @description
 * # BookmarksCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('BookmarksCtrl', function ($scope, $http, API_URL) {
        $scope.listings = [];

        $http({
            method: 'GET',
            url: API_URL + 'bookmark/all'
        }).then(function (response) {

            console.log(response);

            $scope.listings = response.data.bookmarks;

        })


    });
