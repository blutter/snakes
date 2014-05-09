describe('Snakes Controller', function () {
	var appCtrl;
	var $scope;
	var snakeRestangular;
	var backend;

	beforeEach(module('snakesApp'));

	beforeEach(inject(function($httpBackend) {
		backend = $httpBackend;
		backend.expect('GET', 'http://localhost/data/snake.json').respond(
			[
				{'id':1, 'name':'snake1'},
				{'id':2, 'name':'snake2'},
				{'id':3, 'name':'boa'},
				{'id':4, 'name':'asp'},
				{'id':5, 'name':'cobra'}
			]
		);
	}));

	beforeEach(inject(function($rootScope, $controller, SnakeRestangular) {
		$scope = $rootScope.$new();
		snakeRestangular = SnakeRestangular;
		appCtrl = $controller('IndexCtrl', { $scope: $scope, SnakeRestangular: snakeRestangular });
		backend.flush();
	}));

	describe('As a user, I want to be able to view a list of known snakes', function () {
		it('the snakes data should be available', function() {
			expect($scope.snakes.length).toEqual(5);
		});
	});

});

describe('MyTestCtrl', function () {
	var appCtrl;
	beforeEach(module('snakesApp'));
	beforeEach(inject(function($controller) {
		appCtrl = $controller('MyTestCtrl');
	}));

	describe('Tests', function () {
		it('should have a message', function () {
			expect(appCtrl.message).toBe('Hello');
		});
	});
});