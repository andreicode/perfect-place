'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingCtrl', function ($scope, $routeParams, listings, user, NgMap) {

        $scope.listing = {};

        $scope.user = {};


        user.get().then(function (response) {

            $scope.user = response;

        });


        NgMap.getMap({ id: 'single-map' }).then(function (map) {


            listings.getSingle($routeParams.id).then(function (response) {

                $scope.listing = response.data.listing;

                var marker = new google.maps.Marker({

                    position: { lat: $scope.listing.lat, lng: $scope.listing.long },
                    map: map

                });

                map.setCenter({ lat: $scope.listing.lat, lng: $scope.listing.long });

            }, function (err) {

                console.log(err);

            })

        });


    });
