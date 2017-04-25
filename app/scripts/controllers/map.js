'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MapCtrl
 * @description
 * # MapctrlCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MapCtrl', function ($scope, $mdSidenav, NgMap) {


        $scope.openFilters = function () {

            $mdSidenav('right').open();

        };

        $scope.filters = {};
        $scope.setFilter = function () { };       

        NgMap.getMap().then(function (map) {

            var transitLayer = new google.maps.TransitLayer();
            var trafficLayer = new google.maps.TrafficLayer();
            var bikeLayer = new google.maps.BicyclingLayer();

            $scope.setFilter = function (filter, value) {

                if (filter === 'traffic') {

                    if (value) {

                        trafficLayer.setMap(map);

                    } else {

                        trafficLayer.setMap(null);

                    }

                } else if (filter === 'transit') {

                    if (value) {

                        transitLayer.setMap(map);

                    } else {

                        transitLayer.setMap(null);

                    }

                } else if (filter === 'bike') {


                    if (value) {

                        bikeLayer.setMap(map);

                    } else {

                        bikeLayer.setMap(null);

                    }
                }

            };



            //DUMMY MARKERS

            var prMarker = new google.maps.Marker({
                position: {lat: 51.5091615, lng: -0.1194603},
                icon: '/images/pp-marker-2.png'
            });

            prMarker.setMap(map);



        });

    });
