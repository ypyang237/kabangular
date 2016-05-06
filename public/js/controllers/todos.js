'use strict';

(function() {

 angular.module('myApp')
  .controller('TodosController', ['$scope', 'todoService', '$http', function($scope, todoService, $http) {




$http.get('/api/todos')
        .success(function(data) {
          console.log('API hit');
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

  }]);

}());