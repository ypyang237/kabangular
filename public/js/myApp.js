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
      .otherwise({
        templateUrl : 'views/error404.html',
        controller  : 'ErrorController' });  }])

  .run(['$rootScope', function($rootScope){
    // run information
  }]);
})();