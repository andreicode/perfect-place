'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingCtrl', function ($scope, $routeParams, listings) {

        $scope.listing = {};

        listings.getSingle($routeParams.id).then(function (response) {

            $scope.listing = response.data.listing;
            console.log($scope.listing);

        }, function (err) {

            console.log(err);

        })


    });
