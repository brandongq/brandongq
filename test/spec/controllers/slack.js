'use strict';

describe('Controller: SlackCtrl', function () {

  // load the controller's module
  beforeEach(module('brandongqApp'));

  var SlackCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SlackCtrl = $controller('SlackCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SlackCtrl.awesomeThings.length).toBe(3);
  });
});
