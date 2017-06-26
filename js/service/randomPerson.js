app.factory("randomPerson",['$http',function($http){
  var o = {};
  
  o.fetchData = function(){
     return $http.get('https://api.randomuser.me/?results=50')
      .success(function(data){
        console.log(data);    
  		return data;
  })
      .error(function(err){
    	return err;
  });
      };
  
  
  return o;
	}]);


