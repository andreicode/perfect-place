'use strict';

describe('Controller: MyListingsCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectPlaceApp'));

  var MyListingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyListingsCtrl = $controller('MyListingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyListingsCtrl.awesomeThings.length).toBe(3);
  });
});
