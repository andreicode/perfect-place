'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.bookmark
 * @description
 * # bookmark
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('bookmark', function (API_URL, $http) {

        return {

            add: function (id) {

                return $http({

                    method: 'POST',
                    url: API_URL + 'bookmark/' + id

                });

            },

            remove: function (id) {

                return $http({

                    method: 'DELETE',
                    url: API_URL + 'bookmark/' + id

                });

            }
        }

    });
