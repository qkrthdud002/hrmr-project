var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const todolist=[
    {todoId:1, title:'todo1'},
    {todoId:2, title:'todo2'},
    {todoId:3, title:'todo3'},
    {todoId:4, title:'todo4'},
  ];

  res.render('todolist', { todolist: todolist });

  //res.render('todolist', { title: 'Todo' });

  //res.render('newtodo', {title: 'newtodo'})
});

module.exports = router;
