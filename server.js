'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todos = require('./routes/todos');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kanbangular');

app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use('/api/todos', todos);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected to mongoose');
});

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    });
});

// var todoSchema = mongoose.Schema({
//   id: Number,
//   title: String,
//   author: String,
//   due: Date,
//   state: String

// });

// var task = mongoose.model('Task', todoSchema);

app.get('/api/todos', (req, res) => {
  Todo.find((e, todos) => {
    if (e) {
      res.send(e);
    }
    res.json(todos);
  });
});

app.post('/api/todos', (req, res) => {
  Todo.create({
    title: req.body.title,
    author: req.body.author,
    dueDate: req.body.dueDate,
    story: req.body.story,
    state: req.body.state,
    done: false
  }, (e, todo) => {
    if (e) {
      res.send(e);
    }
    Todo.find((e, todos) => {
    if (e) {
      res.send(e);
    }
      res.json(todos);
    });
  });
});

app.delete('/apa/todos/:todo_id', (req, res) => {
  Todo.remove({
    _id : req.params.todo_id
  }, (e, todo) => {
    if (e) {
      res.send(e);
    }
    Todo.find((e, todos) => {
      if (e) {
        res.send(e);
      }
      res.json(todos);
    });
  });
});






app.listen(PORT, () => console.log(`Server listening on ${PORT}`));