'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('NavCtrl', function ($scope, $mdSidenav) {

        $scope.closeSidenav = function () {
            $mdSidenav('left').close();
        };
    });
