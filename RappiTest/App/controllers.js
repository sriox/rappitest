(function() {
    "use strict";

    angular.module("SolutionControllers", [])
    .controller("MainCtrl", ["$scope", function($scope) {
            $scope.creator = "Sergio Rios Giraldo";
            $scope.testCases = 0;
            $scope.cases = [];

            //T observer to create cases
            $scope.$watch("testCases", function (newVal, oldVal) {
                $scope.cases = [];
                for (var i = 1; i <= newVal; i++) {
                    $scope.cases.push({ n: 0, m: 0 });
                }
            });

            //Set up matrix for a case
            $scope.setUpMatrix = function(i, n) {
                var matrix = [];
                
                var dy = [];
                var dz = [];
                //var nCords = n * n * n;

                for (var x = 0; x < n; x++) {
                    for (var y = 0; y < n; y++) {
                        for (var z = 0; z < n; z++) {
                            matrix.push({x: x, y: y, z: z, v: 0});
                        }                        
                    }                    
                }

//                for (var j = 0; j < nCords; j++) {
//                    row = [];
//                    for (var c = 0; c < 3; c++) {
//                        row.push(0);
//                    }
//                    matrix.push(row);
//                }
                
                $scope.cases[i].n = n;
                $scope.cases[i].matrix = matrix;
            }

            //Set operations pool for each case
            $scope.setUpOperations = function(i, m) {
                $scope.cases[i].m = m;
                $scope.cases[i].operations = [];
                for (var j = 0; j < Math.min(m, 1000); j++) {
                    $scope.cases[i].operations.push({text: "", result: ""});
                }
            }

            //Set up operation to execute
            $scope.setUpOperation = function (i, j, o) {

                var resp = $scope.matrixCalc($scope.cases[i].matrix, o);
                $scope.cases[i].matrix = resp.matrix;

                $scope.cases[i].operations[j].text = o;
                $scope.cases[i].operations[j].result = resp.result;
            }

            //Process operations and get results
            $scope.matrixCalc = function (matrix, operation) {
                if (operation.length === 0) return;
                var result = {matrix: matrix, result: ""};
                var parts = operation.split(" ");
                var action = parts[0].toUpperCase();
                try {
                    if (action === "UPDATE" || action === "QUERY") {
                        
                        if (action === "UPDATE") {
                            if (parts.length !== 5) throw "Invalid parameters number";

                            var x = parts[1]-1;
                            var y = parts[2]-1;
                            var z = parts[3]-1;
                            var val = parts[4];

                            var c = _.find(matrix, function(cord) {
                                return cord.x == x && cord.y == y && cord.z == z;
                            });

                            c.v = parseFloat(val);

                            result.result = "Coordinate updated";
                        } else {
                            if (parts.length !== 7) throw "Invalid parameters number";

                            var x1 = parts[1]-1;
                            var y1 = parts[2]-1;
                            var z1 = parts[3]-1;
                            var x2 = parts[4]-1;
                            var y2 = parts[5]-1;
                            var z2 = parts[6]-1;

                            var sum = 0;

                            _.each(matrix, function(cord) {
                                if (cord.x >= x1 && cord.x <= x2) {
                                    if (cord.y >= y1 && cord.y <= y2) {
                                        if (cord.z >= z1 && cord.z <= z2) {
                                            sum = sum + cord.v;
                                        }
                                    }
                                }
                            });

                            result.result = sum;
                        }
                    } else {
                        throw "The action is not recognized";
                    }
                } catch (err) {
                    result.matrix = matrix;
                    result.result = err;
                }

                return result;
            }
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