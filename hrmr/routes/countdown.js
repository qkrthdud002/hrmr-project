var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('countdown', { title: 'Express' });

  $(document).ready(function() {
    var timer;
    //시작
    $('#countdown_button_start').click(function(){
        timer = setInterval(function(){
        var timer_sec  = Number($("#span_sec").text());
        $("#span_sec").text(timer_sec+1);
        },1000);
    });
  
    //중지
    $('#countdown_button_pause').click(function(){
      clearInterval(timer);
    });
  });
});

module.exports = router;