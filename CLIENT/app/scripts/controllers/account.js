'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('AccountCtrl', function ($scope, $timeout, user) {

        user.subscribe(function (data) {

            $timeout(function () {

                $scope.user = data;

            });

        });

        $scope.user = user.get();

    });
