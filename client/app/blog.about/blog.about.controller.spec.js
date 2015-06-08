'use strict';

describe('Controller: BlogAboutCtrl', function () {

  // load the controller's module
  beforeEach(module('cleanBlogApp'));

  var BlogAboutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogAboutCtrl = $controller('BlogAboutCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
