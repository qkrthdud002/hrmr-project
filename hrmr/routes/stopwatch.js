var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:todoId', async (req, res) => {
  const todoId=req.params.todoId;

  // db에서 주어진 todoId를 이용해 todo정보 조회
  const rows = await conn.query('select * from todo where todo_id=?',[todoId])
  if(rows.length > 0){
    const todo = rows[0]
    res.render('stopwatch', {todo:todo});
  }
  else {
    res.render('stopwatch')
  }
});

router.post('/:todoId', async (req, res)=>{
  const todoId=req.params.todoId;

  // time_record 테이블에 시간 정보 저장
  res.redirect('/todolist');
});

module.exports = router;