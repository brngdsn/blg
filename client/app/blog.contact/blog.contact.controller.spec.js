'use strict';

describe('Controller: BlogContactCtrl', function () {

  // load the controller's module
  beforeEach(module('cleanBlogApp'));

  var BlogContactCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogContactCtrl = $controller('BlogContactCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
