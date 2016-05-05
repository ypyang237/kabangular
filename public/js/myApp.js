'use strict';

(function() {
  angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');

myApp
  .config(['$locationProvider', '$routeProvider',function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false}
      );
    $routeProvider
      .when('/', {
        templateUrl : 'views/default.html'
      })
      .when('/todos', {
        templateUrl: 'views/todo.html',
        controller : 'todoController'
      })
      .otherwise({
        templateUrl : 'views/error404.html',
        controller  : 'ErrorController' });  }])
  .run(['$rootScope', function($rootScope){
    // run information
  }]);
})();