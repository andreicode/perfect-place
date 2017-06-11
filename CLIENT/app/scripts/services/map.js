'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.map
 * @description
 * # map
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('mapService', function (API_URL, $http) {

        return {

            get: function () {

                return $http.get(API_URL + 'listing/map');

            }

        }

    });
