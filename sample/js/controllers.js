'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', [])

controllers.controller('Controller1', ['$scope', '$timeout', function($scope, $timeout) {

        $timeout(function() {
            $scope.Loaded = true;
            console.log("Controller 1 Done");
        }, (Math.random()*10)*1000);
  }]);


controllers.controller('Controller2', ['$scope', '$timeout', function($scope, $timeout){



    $timeout(function() {
        $scope.Products = { Names: ['Banana','Phone'], SaleType: 'TodayOnly' };
        console.log("Controller 2 Done");
    }, (Math.random()*10)*1000);


}]);




controllers.controller('Controller3', ['$scope', '$timeout', function($scope, $timeout){

    var loaded = function() {
        if($scope.Object1 && $scope.Object2 && $scope.Object3){
            console.log("Controller 3 Done");
            $scope.Status = { Complete: true }
        }
    }


    $timeout(function() {
        $scope.Object1 = {x:193};

        loaded();
    }, (Math.random()*10)*1000);


    $timeout(function() {
        $scope.Object2 = {y:293};

        loaded();
    }, (Math.random()*10)*1000);


    $timeout(function() {
        $scope.Object3 = {z:444};

        loaded();
    }, (Math.random()*10)*1000);

}]);
