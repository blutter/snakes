snakesApp.controller('AddSnakesCtrl', function ($scope, SnakeRestangular) {

	$scope.snake = {
		id: 0,
		name: "",
		description: "",
		genus: "",
		species: "",
		venomous: false
	};


	$scope.save = function() {
		console.log('name ' + $scope.snake.name);
		console.log('genus ' + $scope.snake.genus);
		console.log('species ' + $scope.snake.species);
		console.log('venomous ' + $scope.snake.venomous);

		SnakeRestangular.all('api/snakes').post($scope.snake);

	};


  // Native navigation
  steroids.view.navigationBar.show("Add a Snake");
  steroids.view.setBackgroundColor("#FFFFFF");
});
