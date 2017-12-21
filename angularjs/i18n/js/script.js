var app = angular.module('app', []);

// Define the `NavigationBarController` controller on the `app` module
app.controller('NavigationBarController', function($scope) {
	$scope.items = [{
		name: 'Home',
		id:'home',
		location: '/'
	}, {
		name: 'Questions',
		id:'questions',
		location: '/questions'
	}, {
		name: 'Tags',
		id:'tags',
		location: '/tags'
	}, {
		name: 'Users',
		id:'users',
		location: '/users'
	}];
});