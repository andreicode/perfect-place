'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('HeaderCtrl', function ($scope, $location, $mdSidenav) {

        $scope.toggleMenu = function () {

            $mdSidenav('left').toggle();

        };


        $scope.toggleMapFilters = function () {

            $mdSidenav('right').toggle();

        };

        $scope.openAdvancedFilters = function () {

            

        };

        $scope.getHeaderByLocation = function () {

            if ($location.path() === '/map') {

                return 'Find the perfect place';

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

    });
