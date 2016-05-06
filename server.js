'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todos = require('./routes/todos');
const bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kanbangular');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected to mongoose');
});

var todoSchema = mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  due: Date,
  state: String
});

var task = mongoose.model('Task', todoSchema);

app.use(express.static('./public'));

app.use('/api/todos', todos);

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));