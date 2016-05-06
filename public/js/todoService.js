'use strict';

(function() {


function todoService() {

  this.getTodo = function() {
    return this.todo;
  };

  this.getTodo = function(id) {

    return this.todo.filter(function(todo) {
      return id === todo.id;
    })
    .reduce(function(p, c) {
      return c;
    }, null);
  };

  this.nextId = function() {
    return this.todo.reduce(function(highest, todo) {
      return Math.max(todo.id, highest);
    }, 0 ) + 1;
  };

  this.addTodo = function(todo) {
    this.todo.push(Object.assign({
      id: this.nextId()
    }, todo)
  );
  Object.assign(todo, {
    title: '',
    author: '',
    due: '',
    state: ''
  });

  };

angular.module('myApp')
  .service('todoService', todoService);


}

}());