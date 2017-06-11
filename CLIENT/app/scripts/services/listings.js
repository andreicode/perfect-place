'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.listings
 * @description
 * # listings
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('listings', function (API_URL, $http) {


        return {

            getAll: function () {

                return $http.get(API_URL + 'listing/all');

            },

            getSingle: function (id) {

                return $http.get(API_URL + 'listing/' + id);

            }

        }

    });
