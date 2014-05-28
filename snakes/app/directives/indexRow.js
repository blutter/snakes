'use strict';

angular.module('snakesApp').directive('indexRow', function() {
	return {
		restrict: 'E',
		replace: 'true',
		template: '<span>My simple directive</span>'
	};

});