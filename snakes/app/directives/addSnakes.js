"use strict";

angular.module('snakesApp').directive('addSnakes', function(SnakeRestangular) {
	return {
		restrict: 'E',
		templateUrl: '/views/templates/addSnakes.html',
		controller: '@',
		name: 'ctrl'
	};
});