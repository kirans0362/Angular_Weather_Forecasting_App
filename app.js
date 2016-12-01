var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
//controller
weatherApp.controller('homeController',['$scope','$resource','customContainer',function($scope,$resource,customContainer){
	$scope.city = customContainer.city;
	$scope.$watch('city',function(){
    	customContainer.city = $scope.city;
    });

}]);
weatherApp.controller('forecastController',['$scope','$resource','customContainer','$routeParams',function($scope,$resource,customContainer,$routeParams){
    $scope.city = customContainer.city;
    $scope.days = $routeParams.days || 2;

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/city?');
    $scope.weatherResult = $scope.weatherAPI.get({id:$scope.city, cnt:$scope.days, APPID:'be2594815218b90ed0ce313cc75edcfd'});
    //id=5373327&APPID=be2594815218b90ed0ce313cc75edcfd
    $scope.convertToFarenheit = function(degk){
    	return Math.round((1.8*(degk-273))+32);
  };
  $scope.convertDate = function(dt){
  	return new Date(dt*1000);
  }
    
}]);
weatherApp.service('customContainer',function(){
    this.city ='5373327';
});
weatherApp.directive('customDirective',function(){
	return{
		restrict:'E',
		templateUrl:'directives/directive.html',
		replace:true,
		scope:{
			weatherDay :'=',
			convertToStandard :"&",
			convertToDate : "&",
			dateFormat :"@"
		},

	}
})

weatherApp.config(function($routeProvider) {

    $routeProvider
    .when('/',{
    	templateUrl:'pages/home.html',
    	controller:'homeController'
    })
    .when('/forecast',{
    	templateUrl:'pages/forecast.html',
    	controller:'forecastController'
    })
     .when('/forecast/:days',{
    	templateUrl:'pages/forecast.html',
    	controller:'forecastController'
    })
    	
	
})