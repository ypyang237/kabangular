'use strict';

(function() {



function todoService() {

console.log('HELLO');

    this.tasks = [
      {
        id: 1,
        title: 'Starship Troopers',
        author: 'Robert A. Heinlein',
        due: '3/4/2016',
        state: 'ok'
      },
      {
        id: 2,
        title: 'Enders Game',
        author: 'Orson Scott Card',
        due: '3/4/2016',
        state: 'ok'
      }
    ];



  this.getTasks = function() {
    return this.tasks;
  };


  this.getTask = function(id) {

    return this.task.filter(function(task) {
      return id === task.id;
    })
    .reduce(function(p, c) {
      return c;
    }, null);
  };

  this.nextId = function() {
    return this.tasks.reduce(function(highest, task) {
      return Math.max(task.id, highest);
    }, 0 ) + 1;
  };

  this.addTask = function(task) {
    this.tasks.push(Object.assign({
      id: this.nextId()
    }, task)
  );
  Object.assign(task, {
    title: '',
    author: '',
    due: '',
    state: ''
  });

  };



angular.module('myApp')
  .service('todoService', todoService);


};

}());