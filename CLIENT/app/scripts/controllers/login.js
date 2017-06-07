'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('LoginCtrl', function ($auth, $scope) {

        

        $scope.authenticate = function(provider) {
            $auth.authenticate(provider);
        };
    });
