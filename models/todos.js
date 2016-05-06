const mongoose = require('mongoose');


var todoSchema = mongoose.Schema({
  title: String,
  author: String,
  due: Date,
  state: String
});


module.exports = mongoose.model('Todo', todoSchema);