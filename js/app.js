var app = angular.module("myApp", ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider.when("/details:s?",{
    controller:"details",
    templateUrl : "/js/views/details.html"
  })
  .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});