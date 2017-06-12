'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:EditListingCtrl
 * @description
 * # EditListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('EditListingCtrl', function (API_URL, $scope, NgMap, $mdDialog, listing, $http) {
        $scope.file = undefined;
        $scope.listing = angular.copy(listing);

        var marker = undefined;

        $scope.close = function () {

            $mdDialog.hide();

        };

        $scope.editListing = function () {

            var formData = new FormData();

            if ($scope.file.length) {

                formData.append('image', $scope.file[0].lfFile);

            }

            formData.append('title', $scope.listing.title);
            formData.append('phone', $scope.listing.phone);
            formData.append('address', $scope.listing.address);
            formData.append('rental', $scope.listing.rental);
            formData.append('price', $scope.listing.price);
            formData.append('roomNumber', $scope.listing.roomNumber);
            formData.append('description', $scope.listing.description);

            $http({
                method: 'POST',
                url: API_URL + 'listing/update/' + $scope.listing.id,
                data: formData,
                transformRequest: angular.identity,
                headers: {
                    'Content-type': undefined,
                }
            }).then(function (response) {

                console.log(response);
                $mdDialog.hide(response.data.listing);

            }, function (err) {

                console.log(err);

            })





        };
    });
