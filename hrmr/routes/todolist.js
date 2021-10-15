var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('todolist', { title: 'todo' });

  res.render('todolist', { title: 'Todo' });

});

module.exports = router;
