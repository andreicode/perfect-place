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

            getAll: function (filter) {

                return $http({ method: 'GET', url: API_URL + 'listing/all', params: filter });

            },

            getSingle: function (id) {

                return $http.get(API_URL + 'listing/' + id);

            },

            getMy: function (filter) {

                return $http({ method: 'GET', url: API_URL + 'listing/my', params: filter });

            },

        }

    });
