'use strict';

(function() {
  angular.module('myApp')
    .controller('TaskController', ['$scope', 'TaskService',
      function($scope, TaskService){
    $scope.TaskService = TaskService;
    }]);
})();