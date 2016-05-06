'use strict';

var newTaskBtn = document.getElementById('newTaskBtn');
newTaskBtn.addEventListener('click', function(event) {
  console.log('click');
 TaskService();
});


function TaskService() {

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

var newTaskReq = new XMLHttpRequest();
newTaskReq.addEventListener('load', function(data) {
  console.log('data');
});

newTaskReq.open('POST', '/');
newTaskReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
newTaskReq.send(Object);

angular.module('myApp')
  .service('TaskService', TaskService);


}