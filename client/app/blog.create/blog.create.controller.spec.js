'use strict';

describe('Controller: BlogCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('blgApp'));

  var BlogCreateCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogCreateCtrl = $controller('BlogCreateCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
