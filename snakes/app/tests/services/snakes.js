'use strict';

describe('Service: Snakes', function () {

  // load the service's module
  beforeEach(module('snakesApp'));

  // instantiate service
  var Snakes;
  beforeEach(inject(function (_Snakes_) {
    Snakes = _Snakes_;
  }));

  it('should do something', function () {
    expect(!!Snakes).toBe(true);
  });

});
