'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingsCtrl
 * @description
 * # ListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingsCtrl', function ($scope, listings) {

        $scope.listings = [];

        listings.getAll().then(function (response) {

            $scope.listings = response.data.listings;
            console.log($scope.listings);

        });

    });
