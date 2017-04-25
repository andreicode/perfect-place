'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MainCtrl', function ($scope, $location) {

        this.getLocation = function () {
            // console.log($location.path());
            return $location.path();

        };

        // $scope.getLocation();
    });
