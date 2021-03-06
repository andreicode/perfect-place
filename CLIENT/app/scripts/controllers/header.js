'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('HeaderCtrl', function ($scope, $auth, $rootScope, $location, $mdSidenav, user) {

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        user.subscribe(function (user) {

            $scope.user = user;

        })

        $scope.toggleMenu = function () {

            $mdSidenav('left').toggle();

        };


        $scope.toggleMapFilters = function () {

            $mdSidenav('right').toggle();

        };

        $scope.getHeaderByLocation = function () {

            if ($location.path() === '/map') {

                return 'Find your perfect place';

            } else if ($location.path() === '/listings') {

                return 'Listings';

            } else if ($location.path() === '/my-listings') {

                return 'My Listings';

            } else if ($location.path() === '/bookmarks') {

                return 'Bookmarks';

            } else if ($location.path() === '/account') {

                return 'Account';

            } else if ($location.path() === '/contact') {

                return 'Contact';

            } else {

                return '';

            }

        };

        $scope.setFilter = function (filter, value) {

            $rootScope.$emit('filter', { filter: filter, value: value });

        }

    });
