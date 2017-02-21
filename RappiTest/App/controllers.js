(function() {
    "use strict";

    angular.module("SolutionControllers", [])
    .controller("MainCtrl", ["$scope", function($scope) {
            $scope.test = "Sergio Rios";
        }])
    .filter("range", function() {
            return function(n) {
                var res = [];
                for (var i = 0; i < n; i++) {
                    res.push(i);
                }
                return res;
            }
        });
})();