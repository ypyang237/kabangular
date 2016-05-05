'use strict';

(function() {

  angular.module('myApp')
    .provider('Todos', [function() {
      var endpoint;

      this.setEndpoint = function(url) {
        endpoint = url;
      };

      //injectable service step
      this.$get = ['$http', function($http) { //this is the 'class' or 'Service'

        return { //like a factory
          getTodos: function() {
            return $http.get(endpoint);
          }
        };



      }];


    }]);


})();