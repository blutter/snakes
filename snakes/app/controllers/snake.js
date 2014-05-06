var snakeApp = angular.module('snakeApp', ['SnakeModel', 'ngTouch']);


// Index: http://localhost/views/snake/index.html

snakeApp.controller('IndexCtrl', function ($scope, SnakeRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/snake/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/snake.js)
  SnakeRestangular.all('snake').getList().then( function(snakes) {
    $scope.snakes = snakes;
  });

  // Native navigation
  steroids.view.navigationBar.show("Snake index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/snake/show.html?id=<id>

snakeApp.controller('ShowCtrl', function ($scope, $filter, SnakeRestangular) {

  // Fetch all objects from the local JSON (see app/models/snake.js)
  SnakeRestangular.all('snake').getList().then( function(snakes) {
    // Then select the one based on the view's id query parameter
    $scope.snake = $filter('filter')(snakes, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Snake: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
