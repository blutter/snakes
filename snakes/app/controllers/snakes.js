var snakesApp = angular.module('snakesApp', ['SnakeModel', 'ngTouch', 'ionic']);


// Index: http://localhost/views/snakes/index.html

snakesApp.controller('IndexCtrl', function ($scope, SnakeRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/snakes/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/snakes.js)
  SnakeRestangular.all('getnextpage').one('0').getList().then( function(snakes) {
    $scope.snakes = snakes;
  });

//	$scope.snakes = [{id:1, name:'snake1'},{id:2, name:'snake2'},{id:3, name:'boa'},{id:4, name:'asp'},{id:5, name:'cobra'}];
	//$scope.snakes = [{'id':1, 'name':'snake1'},{'id':2, 'name':'snake2'},{'id':3, 'name':'boa'},{'id':4, 'name':'asp'},{'id':5, 'name':'cobra'}];

	$scope.doRefresh = function() {
		SnakeRestangular.all('get').getList().then( function(snakes) {
			$scope.snakes = snakes;
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

  // Native navigation
  steroids.view.navigationBar.show("Snake index");
  steroids.view.setBackgroundColor("#FFFFFF");
});


// Show: http://localhost/views/snakes/show.html?id=<id>

snakesApp.controller('ShowCtrl', function ($scope, $filter, SnakeRestangular) {

  // Fetch all objects from the local JSON (see app/models/snakes.js)
  SnakeRestangular.all('get').one(steroids.view.params['id']).get().then( function(snakes) {
    // Then select the one gbased on the view's id query parameter
    $scope.snake = $filter('filter')(snakes, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Snake: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});

snakesApp.controller('MyTestCtrl', function() {
	this.message = 'Hello';
});
