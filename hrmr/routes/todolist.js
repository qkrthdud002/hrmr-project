var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('todolist', { title: 'Express' });

  //res.render('todolist', { title: 'Todo' });

  //res.render('newtodo', {title: 'newtodo'})
});

module.exports = router;
