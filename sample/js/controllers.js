'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])

controllers.controller('Controller1', ['$scope', '$timeout', function($scope, $timeout) {

        console.log("A long running process");

        $timeout(function() {
            $scope.Loaded = true;
        }, 3000);
  }]);


controllers.controller('Controller2', ['$scope', '$timeout', function($scope, $timeout){

    console.log("Another long running process");

    $timeout(function() {
        $scope.Products = { Names: ['Banana','Phone'], SaleType: 'TodayOnly' };
    }, 3330);


}]);