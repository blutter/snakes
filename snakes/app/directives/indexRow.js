'use strict';

angular.module('snakesApp').directive('indexRow', function() {
	return {
		restrict: 'E',
		replace: 'true',
		templateUrl: '../views/snakes/templates/snakeIndexRow.html'
	};

});