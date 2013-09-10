var perf = angular.module('performance', []);


/**
 * Registers itself and watches a scope variable for changes to indicate that it is done
 *
 */
perf.directive('performanceLoaded', [function () {

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            scope.$emit('PERF_REGISTER', scope.$id);

            var unwatchLoaded = scope.$watch(attrs.performanceLoaded, function (newValue, oldValue) {
                if (newValue) {
                    scope.$emit('PERF_DONE', scope.$id);
                    //Unregisters the $watch
                    unwatchLoaded();
                }
            });
        }
    }
}]);




/**
 * Listens for performanceLoaded events and sends a message to the beacon
 *
 * @see performanceLoaded
 */
perf.directive('performance', [function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var startTime = (new Date).getTime();
            var divs = [];

            scope.$on('PERF_DONE', function (event, args) {

                var index = divs.indexOf(args);
                if (index >= 0) divs.splice(index, 1);

                //Call beacon when all emits have been received
                if (index >= 0 && divs.length == 0) {
                    var finishTime = (new Date).getTime() - startTime;
                    var initialLoad = 0;
                    if (window.performance) {
                        initialLoad = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
                    }

                    var i = new Image();
                    i.src = '/app/img/beacon.png?content=' + finishTime + '&initial=' + initialLoad + '&name=' + attrs.fgPERF;
                }
            });

            scope.$on('PERF_REGISTER', function (event, args) {
                divs.push(args);
            });
        }
    };
}]);