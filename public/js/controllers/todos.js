'use strict';

(function() {

 angular.module('myApp')
  .controller('TodosController', ['$scope', 'todoService', 'Todos', function($scope, todoService) {
    $scope.todoService = todoService;
     // $scope.todos = [];
     //  Todos.getTodos().then(function(response) {
     //    $scope.todos = response.data;
     //  });
  }]);

}());