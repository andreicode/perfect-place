'use strict';

describe('Controller: EditListingCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectPlaceApp'));

  var EditListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditListingCtrl = $controller('EditListingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditListingCtrl.awesomeThings.length).toBe(3);
  });
});
