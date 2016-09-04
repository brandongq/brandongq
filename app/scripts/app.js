'use strict';

/**
 * @ngdoc overview
 * @name brandongqApp
 * @description
 * # brandongqApp
 *
 * Main module of the application.
 */
angular
  .module('brandongqApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/assignments.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/assignment1', {
        templateUrl: 'views/assignment1.html',
        controller: 'Assignment1Ctrl',
        controllerAs: 'assignment1'
      })
      .when('/assignment2', {
        templateUrl: 'views/assignment2.html',
        controller: 'Assignment2Ctrl',
        controllerAs: 'assignment2'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
