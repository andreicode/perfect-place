'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:MapCtrl
 * @description
 * # MapctrlCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('MapCtrl', function ($scope, $mdSidenav, NgMap, mapService, airQuality) {

        $scope.openFilters = function () {

            $mdSidenav('right').open();

        };

        $scope.filters = {};
        $scope.setFilter = function () { };

        NgMap.getMap({ id: 'main-map' }).then(function (map) {

            var transitLayer = new google.maps.TransitLayer();
            var trafficLayer = new google.maps.TrafficLayer();
            var bikeLayer = new google.maps.BicyclingLayer();

            var airQualityMarkers = [];


            function setAQFilter() {

                for (var i = 0; i < airQualityMarkers.length; i++) {

                    airQualityMarkers[i].setMap(map);

                }

            }

            function removeAQFilter() {

                for (var i = 0; i < airQualityMarkers.length; i++) {

                    airQualityMarkers[i].setMap(null);

                }

            }

            airQuality.get().then(function (response) {

                airQualityMarkers = response.data.results.map(function (item) {

                    return new google.maps.Circle({

                        strokeColor: '#006400',
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                        fillColor: '#808000',
                        fillOpacity: 0.35,
                        map: null,
                        center: {
                            lat: item.coordinates.latitude,
                            lng: item.coordinates.longitude
                        },
                        radius: Math.log2(item.count) * 100

                    });

                });


            }, function (err) { console.log(err) });


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
                } else if (filter === 'pollution') {

                    if (value) {

                        setAQFilter();

                    } else {

                        removeAQFilter();

                    }

                }

            };

            var markers = [];

            mapService.get().then(function (response) {

                var markerMap = response.data.map;

                for (var i = 0; i < markerMap.length; i++) {

                    var marker = new google.maps.Marker({

                        position: { lat: markerMap[i].lat, lng: markerMap[i].long },
                        icon: '/images/pp-marker-2.png',
                        title: markerMap[i].title

                    });

                    marker.content = markerMap[i].title;
                    marker.price = markerMap[i].price;
                    marker.rental = markerMap[i].rental ? '<i class="fa fa-home" aria-hidden="true"> Rental' : '<i class="fa fa-usd" aria-hidden="true"> Sale';
                    marker.rooms = markerMap[i].rooms;
                    marker.listingId = markerMap[i].id;

                    var infowindow = new google.maps.InfoWindow();

                    google.maps.event.addListener(marker, 'click', function () {

                        infowindow.setContent('<b>' + this.content + '<b><br><br>' + this.rental + '<br>Price: ' + this.price + ' $<br>Rooms: ' + this.rooms + '<br><br><a href="/#!/listing/' + this.listingId + '"> More details...</a>');
                        infowindow.open(this.getMap(), this);

                    });

                    marker.setMap(map);

                    markers.push(marker);

                }

            }, function (err) {

                console.log(err);

            });

            // google.maps.event.addListener(map, 'zoom_changed', function () {

            //     var zoom = map.getZoom();

            //     for (var i )

            // });

        });

    });
