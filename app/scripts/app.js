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
      .when('/assignments', {
        templateUrl: 'views/assignments.html',
        controller: 'AssignmentsCtrl',
        controllerAs: 'assignments'
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
      .when('/assignment3', {
        templateUrl: 'views/assignment3.html',
        controller: 'Assignment3Ctrl',
        controllerAs: 'assignment3'
      })
      .when('/assignment4', {
        templateUrl: 'views/assignment4.html',
        controller: 'Assignment4Ctrl',
        controllerAs: 'assignment4'
      })
      .when('/WeatherApp', {
        templateUrl: 'views/weatherapp.html',
        controller: 'WeatherappCtrl',
        controllerAs: 'WeatherApp'
      })
      .when('/assignment5', {
        templateUrl: 'views/assignment5.html',
        controller: 'Assignment5Ctrl',
        controllerAs: 'assignment5'
      })
      .when('/slack', {
        templateUrl: 'views/slack.html',
        controller: 'SlackCtrl',
        controllerAs: 'slack'
      })
      .when('/assignment6', {
        templateUrl: 'views/assignment6.html',
        controller: 'Assignment6Ctrl',
        controllerAs: 'assignment6'
      })
      .when('/weathersecure', {
        templateUrl: 'views/weathersecure.html',
        controller: 'WeathersecureCtrl',
        controllerAs: 'weathersecure'
      })
      .when('/assignment8', {
        templateUrl: 'views/assignment8.html',
        controller: 'Assignment8Ctrl',
        controllerAs: 'assignment8'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
