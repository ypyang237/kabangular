'use strict';

(function() {

 angular.module('myApp')
  .controller('TodoController', ['scope', 'Todos', function($scope, Todos) {

     $scope.todos = [];
      Todos.getTodos().then(function(response) {
        $scope.todos = response.data;
      });

  }]);

}());