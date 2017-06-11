'use strict';

describe('Service: airQuality', function () {

  // load the service's module
  beforeEach(module('perfectPlaceApp'));

  // instantiate service
  var airQuality;
  beforeEach(inject(function (_airQuality_) {
    airQuality = _airQuality_;
  }));

  it('should do something', function () {
    expect(!!airQuality).toBe(true);
  });

});
