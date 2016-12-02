weatherApp.controller('homeController',['$scope','$resource','$location','customContainer',function($scope,$resource,$location,customContainer){
	$scope.city = customContainer.city;
	$scope.$watch('city',function(){
    	customContainer.city = $scope.city;
    });
    $scope.submit = function(){
    	$location.path('/forecast');
    }

}]);
weatherApp.controller('forecastController',['$scope','customContainer','$routeParams','weatherService',function($scope,customContainer,$routeParams,weatherService){
    $scope.city = customContainer.city;
    $scope.days = $routeParams.days || 2;
    $scope.weatherResult= weatherService.GetWeather($scope.city,$scope.days);
    $scope.convertToFarenheit = function(degk){
    	return Math.round((1.8*(degk-273))+32);
  };
  $scope.convertDate = function(dt){
  	return new Date(dt*1000);
  }
    
}]);