'use strict';

/**
 * @ngdoc function
 * @name perfectPlaceApp.controller:ListingCtrl
 * @description
 * # ListingCtrl
 * Controller of the perfectPlaceApp
 */
angular.module('perfectPlaceApp')
    .controller('ListingCtrl', function (API_URL, $timeout, $auth, $scope, $http, $location, $routeParams, listings, user, NgMap, $mdDialog, bookmark) {

        $scope.listing = undefined;

        $scope.user = user.get();

        user.subscribe(function (data) {

            $scope.user = data;

        });

        $scope.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        NgMap.getMap({ id: 'single-map' }).then(function (map) {

            listings.getSingle($routeParams.id).then(function (response) {

                if (!response.data.listing) {

                    $scope.noData = true;
                    return;

                }

                $scope.listing = response.data.listing;

                var marker = new google.maps.Marker({

                    position: { lat: $scope.listing.lat, lng: $scope.listing.long },
                    map: map

                });

                google.maps.event.trigger(map, 'resize');
                map.setCenter(new google.maps.LatLng($scope.listing.lat, $scope.listing.long));

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

                    var usr = angular.copy($scope.listing.user);
                    $scope.listing = response;
                    $scope.listing.rental = $scope.listing.rental === '1' ? 1 : 0;
                    $scope.listing.user = usr;
                

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

        $scope.addBookmark = function (listing) {

            listing.book = true;

            bookmark.add(listing.id).then(function () {

            }, function (err) {

                console.log(err);
                listing.book = false;

            });

        }

        $scope.removeBookmark = function (listing) {

            listing.book = false;

            bookmark.remove(listing.id).then(function () {

            }, function (err) {

                console.log(err);
                listing.book = true;

            });

        }


    });
