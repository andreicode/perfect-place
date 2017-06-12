'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:AddListingCtrl
 * @description
 * # AddListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('AddListingCtrl', function (API_URL, $timeout, $scope, NgMap, $mdDialog, $http) {

        $scope.file = undefined;
        $scope.listing = {};

        var marker = undefined;

        $scope.loaded = false;

        $timeout(function () {

            $scope.loaded = true;

        }, 100);

        NgMap.getMap({ id: 'add-map' }).then(function (map) {


            google.maps.event.addListener(map, 'click', function (ev) {

                if (marker) {

                    marker.setMap(null);

                }

                google.maps.event.trigger(map, 'resize');


                marker = new google.maps.Marker({

                    position: ev.latLng,
                    map: map

                });

            });

        });


        $scope.close = function () {

            $mdDialog.hide();

        };

        $scope.addListing = function () {

            var formData = new FormData();

            formData.append('image', $scope.file[0].lfFile);
            formData.append('title', $scope.listing.title);
            formData.append('phone', $scope.listing.phone);
            formData.append('address', $scope.listing.address);
            formData.append('rental', $scope.listing.rental ? 1 : 0);
            formData.append('price', $scope.listing.price);
            formData.append('roomNumber', $scope.listing.roomNumber);
            formData.append('description', $scope.listing.description);
            formData.append('lat', marker.position.lat());
            formData.append('long', marker.position.lng());

            $http({
                method: 'POST',
                url: API_URL + 'listing/store',
                data: formData,
                transformRequest: angular.identity,
                headers: {
                    'Content-type': undefined,
                }
            }).then(function (response) {

                $mdDialog.hide(response);

            }, function (err) {

                console.log(err);

            })





        };

    });
