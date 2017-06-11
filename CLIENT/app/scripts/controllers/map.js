'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MapCtrl
 * @description
 * # MapctrlCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MapCtrl', function ($scope, $mdSidenav, NgMap, mapService) {

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

            var markers = [];


            mapService.get().then(function (response) {

                var markerMap = response.data.map;

                console.log(markerMap);

                for (var i = 0; i < markerMap.length; i++) {

                    var marker = new google.maps.Marker({

                        position: { lat: markerMap[i].lat, lng: markerMap[i].long },
                        icon: '/images/pp-marker-2.png',
                        title: markerMap[i].title

                    });

                    marker.content = markerMap[i].title;
                    marker.listingId = markerMap[i].id;

                    var infowindow = new google.maps.InfoWindow();


                    google.maps.event.addListener(marker, 'click', function () {

                        infowindow.setContent(this.content + '<br><small><a href="/#!/listing/' + this.listingId + '"> More details...</a></small>');
                        infowindow.open(this.getMap(), this);

                    });

                    marker.setMap(map);

                }

            }, function (err) {

                console.log(err);

            });

            // //DUMMY MARKERS
            // var prMarker1 = new google.maps.Marker({
            //     position: { lat: 51.5091615, lng: -0.1194603 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker2 = new google.maps.Marker({
            //     position: { lat: 51.503408, lng: -0.124245 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker3 = new google.maps.Marker({
            //     position: { lat: 51.506857, lng: -0.127576 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker4 = new google.maps.Marker({
            //     position: { lat: 51.505075, lng: -0.113678 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker5 = new google.maps.Marker({
            //     position: { lat: 51.510230, lng: -0.104182 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker6 = new google.maps.Marker({
            //     position: { lat: 51.512955, lng: -0.126927 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker7 = new google.maps.Marker({
            //     position: { lat: 51.507266, lng: -0.130918 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker8 = new google.maps.Marker({
            //     position: { lat: 51.516116, lng: -0.1159413 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker9 = new google.maps.Marker({
            //     position: { lat: 51.503820, lng: -0.112379 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // var prMarker10 = new google.maps.Marker({
            //     position: { lat: 51.516961, lng: -0.138343 },
            //     icon: '/images/pp-marker-2.png'
            // });

            // prMarker1.setMap(map);
            // prMarker2.setMap(map);
            // prMarker3.setMap(map);
            // prMarker4.setMap(map);
            // prMarker5.setMap(map);
            // prMarker6.setMap(map);
            // prMarker7.setMap(map);
            // prMarker8.setMap(map);
            // prMarker9.setMap(map);
            // prMarker10.setMap(map);

        });

    });
