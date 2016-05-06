'use strict';

(function() {

 angular.module('myApp')
  .controller('TodosController', ['$scope', 'Todos', function($scope, Todos) {




     $scope.todos = [];
      Todos.getTodos().then(function(response) {
        $scope.todos = response.data;
      });

  }]);

}());