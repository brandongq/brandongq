'use strict';

/**
 * @ngdoc function
 * @name brandongqApp.controller:WeathersecureCtrl
 * @description
 * # WeathersecureCtrl
 * Controller of the brandongqApp
 */
angular.module('brandongqApp')
  .controller('WeathersecureCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getWeatherPlz = function () {
      var url = "https://hx4cx7ie2k.execute-api.us-east-1.amazonaws.com/dev/weather-security";
      var token = localStorage.getItem("token");
      var cities = $scope.text;

      $http({
        method: 'PUT',
        url: url,
        data: {"cities": cities},
        headers: {'Authorization': token}
      })
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (error) {
          alert("You need to be a valid user to use this");
        });

      //, {headers: {'Authorization': token}}
      /*$http.put(url, cities)
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (error) {
          $scope.result = "hola";
          alert(error);
        });*/
    };

    /*$scope.getWeather = function(){
      console.log($scope.cities);
      var url = "https://hx4cx7ie2k.execute-api.us-east-1.amazonaws.com/dev/weather-security";
      var payload = {
        cities: $scope.cities
      }

        $http({
          mehtod: 'PUT',
          url: url,
          data: $scope.cities,
          headers: {'Authorization': localStorage.getItem("token")}
        })
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (error) {
          $scope.result = "hola";
          alert(error);
        });

    };*/

    $scope.getAverage = function () {
      var url = "https://hx4cx7ie2k.execute-api.us-east-1.amazonaws.com/dev/weatherStats"
      var token = localStorage.getItem("token");
      $http({
        method: 'GET',
        url: url,
        headers: {'Authorization': token}
      })
        .success(function (data) {
          $scope.result = data;
        })
        .error(function (error) {
          alert("You need to be a valid user to use this");
        });
    }

    $scope.login = function(valid){
      var url = "https://hx4cx7ie2k.execute-api.us-east-1.amazonaws.com/dev/login";
      var credentials = {
        "username": "foo",
        "password": "bgq"
      };

      credentials.username = valid ? "bgq" : "foo";

      $http.post(url, credentials)
        .success(function(data){
          localStorage.setItem("token", data.token);
          if(valid)
            alert("Valid user");
          else
            alert("Invalid user");
        })
        .error(function (error) {
          alert(error);
        });
    }

  });
