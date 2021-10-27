var express = require('express');
const auth = require('./interceptor')
var router = express.Router();

/* GET home page. */
router.get('/', auth, function(req, res, next) {
  res.render('countdown', { title: 'Express', userId:req.session.userId});
});

module.exports = router;