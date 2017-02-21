<%@ Page Language="C#" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<script runat="server">

</script>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="Solution">
<head runat="server">
    <title>Title</title>
    <link href="Content/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="container">
<form id="HtmlForm" runat="server">
    <div ng-controller="MainCtrl">
        <div class="row">
            <div class="col-md-3">
                Type number of cases
            </div>
            <div class="col-md-2">
                <input type="text" ng-model="testCases"  />
            </div>
        </div>
        <br />
        <br />
        <div ng-repeat="i in testCases | range">
            <div class="row">
                <div class="col-md-4">
                    <h3 class="text-primary">
                        Case {{$index + 1}}
                    </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    N (size of the matrix)
                </div>
                <div class="col-md-1">
                    <input type="text" ng-model="n"  />
                </div>
                <div class="col-md-2">
                    M (number of operations)
                </div>
                <div class="col-md-1">
                    <input type="text" ng-model="m"  />
                </div>
            </div>
            <div class="row" ng-repeat="j in x.m | range">
                <div class="col-md-3">
                    Write the operation
                </div>
                <div class="col-md-4">
                    <input type="text" ng-model="operations"  />
                </div>
            </div>
            <br />
            <br />
        </div>
    </div>
    
</form>
    <script src="Scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="Scripts/bootstrap.min.js" type="text/javascript"></script>
    <script src="Scripts/angular.min.js" type="text/javascript"></script>
    <script src="App/controllers.js" type="text/javascript"></script>
    <script src="App/solution.js" type="text/javascript"></script>
</body>
</html>
