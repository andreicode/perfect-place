'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MyListingsCtrl
 * @description
 * # MyListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MyListingsCtrl', function ($scope, $mdDialog, listings) {

        $scope.listings = [];

        $scope.addListing = function (ev) {

            $mdDialog.show({
                controller: 'AddListingCtrl',
                templateUrl: 'views/add-listing.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
            })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
        };

        listings.getMy().then(function (response) {

            $scope.listings = response.data.listings;

        }, function (err) { console.log(err); });

    });
