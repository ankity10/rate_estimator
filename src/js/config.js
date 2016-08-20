var myApp = angular.module("myApp",[
	'ngRoute',
	'artistControllers'
]);

myApp.config(['$routeProvider',function($routeProvider){

	$routeProvider.

	when('/list',{
		templateUrl: 'views/list.html',
		controller: 'MyController'
	}).
    when('/static',{
		templateUrl: 'views/static.html',
		controller: 'MyController'
	}).
	 when('/dynamic',{
		templateUrl: 'views/dynamic.html',
		controller: 'MyController'
	})

	.otherwise({
		redirectTo: '/list'
	});

	
}]);