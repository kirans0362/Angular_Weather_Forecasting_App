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