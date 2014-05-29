'use strict';

angular.module('snakesApp').directive('snakeDetails', function() {
	return {
		restrict: 'E',
		templateUrl: '/views/templates/snakeDetails.html',
		scope: {
			snake: "="
		}
	};
});