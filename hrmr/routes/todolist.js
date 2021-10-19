var express = require('express');
var router = express.Router();
var db = require('../model/dbcp');

/* GET home page. */
router.get('/', async (req, res)=> {
  const query_date = req.query.date;
  if(query_date==undefined){
    //query_date에 오늘 날짜 저장.
  }

  //DB에서 주어진 날짜의 todo list조회

  // DB에서 주어진 날짜의 time_reoced 조회


  res.render('todolist');
});

// 할일 등록 
router.post('/', async (req, res)=>{
  const {todoId, todotext}=req.body;
  const conn = await dbcp.getConnection();
  const rows = await conn.query(
    'insert '
  );
  conn.end();
  res.json({result:'ok'});
});

// 할일 수정 - 완료처리
router.put('/:todoId', async (req, res)=>{
  const todoId = req.params.todoId;
  res.json({result:'ok'});
});

// 할일 삭제 
router.delete('/:todoId', async (req, res)=>{
  const todoId = req.params.todoId;
  res.json({result:'ok'});
});

module.exports = router;
