var perf = angular.module('performance', []);

perf.directive('performance',[function () {
    return {
        restrict: 'A',
        link: function(scope, ele, attrs){
            console.log('performance');
        }
    }
}]);