'use strict';

/**
 * @ngdoc service
 * @name perfectPlaceApp.user
 * @description
 * # user
 * Service in the perfectPlaceApp.
 */
angular.module('perfectPlaceApp')
    .service('user', function (API_URL, $q, $auth, $http) {

        var _user = undefined;

        const getUser = function () {

            return $http.get(API_URL + 'user');

        }

        return {

            refresh: function () {

                getUser().then(function (response) {

                    _user = response.data.user;

                }, function (err) { console.log(err); });

            },

            get: function () {

                var q = $q.defer();

                if (_user) {

                    q.resolve(_user);

                } else {


                    getUser().then(function (response) {

                        _user = response.data.user;

                        q.resolve(_user);

                    }, function (err) { console.log(err); });

                }


                return q.promise;

            }

        }

    });
