'use strict';

describe('Controller: ListingsCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectPlaceApp'));

  var ListingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListingsCtrl = $controller('ListingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ListingsCtrl.awesomeThings.length).toBe(3);
  });
});
