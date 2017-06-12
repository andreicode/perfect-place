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
        'ngMap',
        'satellizer',
        'lfNgMdFileInput',
        'infinite-scroll'
    ])
    .constant('API_URL', 'http://46.101.132.152/')
    // .constant('API_URL', 'http://localhost:8000/')    
    .config(function (API_URL, $routeProvider, $authProvider) {
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
            .when('/listing/:id', {
                templateUrl: 'views/listing.html',
                controller: 'ListingCtrl',
                controllerAs: 'listing'
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

        // $authProvider.facebook({
        //     clientId: '752540668240093',
        //     url: API_URL + 'login/facebook',
        //     redirectUri: 'http://localhost:9000/'
        // });

        $authProvider.facebook({
            clientId: '772118919625649',
            url: API_URL + 'login/facebook',
            redirectUri: 'http://138.68.94.135/perf/'
        });
    });
