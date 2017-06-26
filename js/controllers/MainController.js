app.controller('MainController', ['$scope','randomPerson',function($scope,randomPerson) {
  randomPerson.fetchData().then(function(data){
   $scope.data=data.data.results;
   $scope.showDiv=function(x){$scope.y=x;};
    $scope.hide=function(){$scope.y={};};
  });
 
}]);