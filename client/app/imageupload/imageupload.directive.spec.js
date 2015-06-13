'use strict';

describe('Directive: imageupload', function () {

  // load the directive's module
  beforeEach(module('blgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imageupload></imageupload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageupload directive');
  }));
});