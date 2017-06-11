'use strict';

describe('Controller: AddListingCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectPlaceApp'));

  var AddListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddListingCtrl = $controller('AddListingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddListingCtrl.awesomeThings.length).toBe(3);
  });
});
