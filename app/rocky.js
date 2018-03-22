var app = angular.module('rocky', ['ngRoute']);

app.config(function($routeProvider,$locationProvider)
  {
	$locationProvider.html5Mode({
		enabled:true,
		requireBase:false	
	});
    $routeProvider
      .when('/about', {
		title: "About", 
		templateUrl: 'about.php',
      })
    }
