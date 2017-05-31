'use strict';

describe('Controller: MapctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('perfectPlaceApp'));

  var MapctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapctrlCtrl = $controller('MapctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MapctrlCtrl.awesomeThings.length).toBe(3);
  });
});
