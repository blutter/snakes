"use strict";

describe('The index row directive', function () {
	var el;

	beforeEach(module('snakesApp'));
	beforeEach(module('../views/snakes/templates/snakeIndexRow.html'));
//	beforeEach(module('Templates'));
	

	beforeEach(inject(function ($compile, $rootScope) {
		var scope = $rootScope;

		scope.snake = { name: 'Snaky', imageFile: 'path to snake.jpg' };

		el = angular.element('<snake-index-row snake="snake"/>');
		$compile(el)(scope);
		scope.$digest();

		console.log(el[0].outerHTML);
	}));

	it('should bind the data', function () {
		expect(false).toBeTruthy();
	});
});