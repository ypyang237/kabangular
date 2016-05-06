'use strict';

const express = require('express');
const router = express.Router();

const todos = [
     {
      id: 1,
      title: 'Update Linkedin',
      author: 'Tyler',
      dueDate: '5/3/2016',
      story: 'Final Project',
      state: "ok"
     },
     {
      id: 2,
      title: 'Update Linkedin',
      author: 'Tyler',
      dueDate: '5/3/2016',
      story: 'Final Project',
      state: "go"
     },
     {
      id: 3,
      title: 'Update Linkedin',
      author: 'Tyler',
      dueDate: '5/3/2016',
      story: 'Final Project',
      state: "go"
     }
    ];

router.get('/', (req, res) => {
  res.json(todos);
});


module.exports = router;