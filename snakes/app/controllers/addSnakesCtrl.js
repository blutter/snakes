angular.module('snakesApp').controller('addSnakesCtrl', function ($scope, SnakeRestangular) {
	$scope.snake = {
		id: 0,
		name: "",
		description: "",
		genus: "",
		species: "",
		venomous: false
	};

	$scope.actionText = "Save Snake!";

	$scope.action = function() {
		console.log($scope.snake);

		SnakeRestangular.all('api/snakes').post($scope.snake).then(function () {
			alert('Saved snake');
			steroids.layers.pop();
		}, function () {
			alert('Error saving snake');
		})
	};
});
