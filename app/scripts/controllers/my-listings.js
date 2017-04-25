'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MyListingsCtrl
 * @description
 * # MyListingsCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MyListingsCtrl', function ($scope, $mdDialog) {
        $scope.showPrompt = function (ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.prompt()
                .title('Add a new listing')
                .textContent('This is a placeholder')
                .placeholder('Test')
                .ariaLabel('Okay')
                .initialValue('Test')
                .targetEvent(ev)
                .ok('Okay!')
                .cancel('Okay');

            $mdDialog.show(confirm).then(function (result) {
            }, function () {
            });
        };
    });
