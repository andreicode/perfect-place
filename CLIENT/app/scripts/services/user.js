'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.user
 * @description
 * # user
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('user', function (API_URL, $auth, $http) {

        const getUser = $http.get(API_URL + 'user');
        let _user = {};

        if ($auth.isAuthenticated()) {

            getUser.then(function (response) {

                _user = response.data.user;

            });

        }


        return {

            refresh: function () {

                getUser();

            },

            get: function () {

                return _user;

            }

        }

    });
