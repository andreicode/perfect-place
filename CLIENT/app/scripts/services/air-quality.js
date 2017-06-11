'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.airQuality
 * @description
 * # airQuality
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('airQuality', function ($http) {

        return {

            get: function () {

                return $http.get('https://api.openaq.org/v1/locations?city=London');

            }

        }

    });
