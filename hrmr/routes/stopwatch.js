var express = require('express');
const auth = require('./interceptor');
const { off, response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get(['/','/:todoId'], auth, async (req, res) => {
  const todoId=req.params.todoId;
  if(todoId==null || todoId==undefined){
    res.render('stopwatch');
    return;
  }

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
  const {start_time, end_time} = req.body;

  // time_record 테이블에 시간 정보 저장
  const Data = `${todo_id}, ${start_time}, ${end_time}`
  db.query(`INSERT INTO time_record(todo_id, start_time, end_time) VALUES(${Data})`)
  
  res.json({result:'ok'});
});

module.exports = router;