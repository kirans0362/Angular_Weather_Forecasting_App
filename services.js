weatherApp.service('customContainer',function(){
    this.city ='5373327';
});

weatherApp.service('weatherService',['$resource',function($resource){

     this.GetWeather= function(city,days,APPID){    
	     var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/city?');
         return  weatherAPI.get({id:city, cnt:days, APPID:'be2594815218b90ed0ce313cc75edcfd'});
    }
}])