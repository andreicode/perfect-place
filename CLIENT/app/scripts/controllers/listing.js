'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingCtrl', function (API_URL, $scope, $http, $location, $routeParams, listings, user, NgMap, $mdDialog) {

        $scope.listing = {};

        $scope.user = {};


        console.log(user.get());

        user.get().then(function (response) {

            $scope.user = response;

        });


        NgMap.getMap({ id: 'single-map' }).then(function (map) {


            listings.getSingle($routeParams.id).then(function (response) {

                $scope.listing = response.data.listing;

                var marker = new google.maps.Marker({

                    position: { lat: $scope.listing.lat, lng: $scope.listing.long },
                    map: map

                });

                map.setCenter({ lat: $scope.listing.lat, lng: $scope.listing.long });

            }, function (err) {

                console.log(err);

            })

        });

        $scope.editListing = function (ev, listing) {

            $mdDialog.show({
                controller: 'EditListingCtrl',
                templateUrl: 'views/edit-listing.html',
                parent: angular.element(document.body),
                locals: { listing: listing },
                targetEvent: ev,
                clickOutsideToClose: true,
            })
                .then(function (response) {

                    $scope.listing = response;

                }, function () {

                });
        };

        $scope.deleteListing = function (ev, id) {

            var confirm = $mdDialog.confirm()
                .title('Would you like to delete this listing?')
                .textContent('This action is permanent.')
                .ariaLabel('Delete listing')
                .targetEvent(ev)
                .ok('Delete')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function () {

                $http({ method: 'DELETE', url: API_URL + 'listing/' + id }).then(function (r) { console.log(r) });

                $location.path('/my-listings');

            }, function () {

            });

        }


    });
