var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);
//controller
weatherApp.controller('homeController',['$scope','$resource','$location','customContainer',function($scope,$resource,$location,customContainer){
	$scope.city = customContainer.city;
	$scope.$watch('city',function(){
    	customContainer.city = $scope.city;
    });
    $scope.submit = function(){
    	$location.path('/forecast');
    }

}]);




