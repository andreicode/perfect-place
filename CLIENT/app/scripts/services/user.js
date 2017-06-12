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
        var _callbacks = [];

        const getUser = function () {

            return $http.get(API_URL + 'user');

        }

        if ($auth.isAuthenticated()) {

            getUser().then(function (response) {

                _user = response.data.user;

                emit();

            }, function (err) { console.log(err); });

        }

        function emit() {

            for (var i = 0; i < _callbacks.length; i++) {

                _callbacks[i](_user);

            }

        }

        return {

            refresh: function () {

                getUser().then(function (response) {

                    _user = response.data.user;

                    emit();

                }, function (err) { console.log(err); });

            },

            subscribe: function (cb) {

                _callbacks.push(cb);

            },

            get: function () {


                return _user;

            }

        }

    });
