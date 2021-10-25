var express = require('express');
var router = express.Router();
var db = require('../model/dbcp');

/* GET home page. */
router.get('/', async (req, res)=> {
  const query_date = req.query.date;
  const conn = await db.getConnection();
  let today = new Date();
  if(query_date==undefined){
    //query_date에 오늘 날짜 저장.

  }
  //DB에서 주어진 날짜의 todo list조회
  
  conn.query('select todo_date from todo');
  
  // DB에서 주어진 날짜의 time_reoced 조회
  

  conn.end();
  res.render('todolist');
});

// 할일 등록 
router.post('/', async (req, res)=>{
  const {todoId, todotext}=req.body;
  const conn = await dbcp.getConnection();
  const rows = await conn.query(
    `INSERT INTO todo (todoId, todotext) VALUES(${queryData})`
  );
  conn.end();
  res.json({result:'ok'});
});

// 할일 수정 - 완료처리
router.put('/:todoId', async (req, res)=>{
  const todoId = req.params.todoId;
  const todotext = req.params.todotext;
  const rows = await conn.query('select todo_id from todo where todo_id=? user_id=?', [ todoId, userId ])//?표에 들어갈 것은 다음 명령어? 배열에서 알려줌

  if(rows.length == 0) {
    res.status(404).json({error: 'Unauthorized or Not found'})
    return
  }
  const foundEntity = rows[0]
  await conn.query('update todo set todo_text=? where todo_id=?', [todotext, todoId])
  
  conn.end();
  res.json({result:'ok'});
});

// 할일 삭제 
router.delete('/:todoId', async (req, res)=>{
  const todoId = req.params.todoId;
  const conn = await dbcp.getConnection();
  conn.query(`DELETE FROM todo WHERE todo_id=${todoId}`)
  res.json({result:'ok'});
});

module.exports = router;
