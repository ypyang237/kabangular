'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todos = require('./routes/todos');

app.use(express.static('./public'));

app.use('/api/todos', todos);

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
    {
      root  : __dirname
    });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));