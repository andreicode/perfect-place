'use strict';

/**
 * @ngdoc overview
 * @name perfectPlaceApp
 * @description
 * # perfectPlaceApp
 *
 * Main module of the application.
 */
angular
    .module('perfectPlaceApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngMaterial',
        'ngMap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .when('/map', {
                templateUrl: 'views/map.html',
                controller: 'MapCtrl',
                controllerAs: 'map'
            })
            .when('/listings', {
                templateUrl: 'views/listings.html',
                controller: 'ListingsCtrl',
                controllerAs: 'listings'
            })
            .when('/my-listings', {
                templateUrl: 'views/my-listings.html',
                controller: 'MyListingsCtrl',
                controllerAs: 'myListings'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })

            .when('/bookmarks', {
                templateUrl: 'views/bookmarks.html',
                controller: 'BookmarksCtrl',
                controllerAs: 'bookmarks'
            })

            .when('/account', {
                templateUrl: 'views/account.html',
                controller: 'AccountCtrl',
                controllerAs: 'bookmarks'
            })
            .otherwise({
                redirectTo: '/map'
            });
    });
