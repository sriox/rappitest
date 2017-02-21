<%@ Page Language="C#" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<script runat="server">

</script>

<html xmlns="http://www.w3.org/1999/xhtml" ng-app="Solution">
<head runat="server">
    <title>Title</title>
    <link href="Content/bootstrap-theme.min.css" rel="stylesheet" type="text/css" />
</head>
<body>
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
        
    </div>
    
</form>
    <script src="Scripts/jquery-1.9.1.min.js" type="text/javascript"></script>
    <script src="Scripts/bootstrap.min.js" type="text/javascript"></script>
    <script src="Scripts/angular.min.js" type="text/javascript"></script>
    <script src="App/controllers.js" type="text/javascript"></script>
    <script src="App/solution.js" type="text/javascript"></script>
</body>
</html>
