'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('NavCtrl', function ($auth, $scope, $mdSidenav, $mdDialog, user, $location) {

        $scope.closeSidenav = function () {
            $mdSidenav('left').close();
        };

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        $scope.openLogin = function (ev) {

            $mdDialog.show({
                controller: 'LoginCtrl',
                templateUrl: 'views/dialogs/login.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            });

        };

        $scope.logout = function () {

            $auth.logout();
            $location.path('/');
            $scope.closeSidenav();
        }

    });


