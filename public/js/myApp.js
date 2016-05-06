'use strict';

(function() {
  angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config([
    'TodosProvider',
    '$locationProvider',
    '$routeProvider',
    function(TodosProvider, $locationProvider, $routeProvider) {
      TodosProvider.setEndpoint('/api/todos');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false}
      );

    $routeProvider
      .when('/', {
        templateUrl : 'views/default.html'
      })
      .when('/todos', {
        templateUrl: 'views/todos.html',
        controller : 'TodosController'
      })
      .when('/new', {
        templateUrl: 'views/newTask.html',
        controller: 'TaskController'
      });

   }])

  .run(['$rootScope', function($rootScope){
    // run information
  }]);
})();