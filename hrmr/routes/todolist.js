var express = require('express');
var moment = require('moment');
var router = express.Router();
var db = require('../model/dbcp');
const auth=require('./interceptor');

const getTodayDate = () => {
  return moment().format('yyyy-MM-DD');
}

router.get('/', auth, async (req, res)=> {
  const query_date = req.query.date || getTodayDate();
  //const offsetForKR = 1000 * 60 * 60 * 9;
  //const date_kor = new Date(Date.parse(query_date) + offsetForKR).toTimeString()

  const conn = await db.getConnection();
  const userId = req.session.userId;
  if(userId==null || userId==undefined){
    res.render('todolist');
    return;
  }
   //DB에서 주어진 날짜의 todo list조회
  const todolist = await conn.query('select * from todo where todo_date=? and user_id=?', [query_date, userId]);
  conn.end();

  res.render('todolist', {todolist: todolist, userId:req.session.userId});
});  

router.get('/records', auth, async(req, res)=>{
  const query_date = req.query.date || getTodayDate();
  const conn = await db.getConnection();
  const userId = req.session.userId;

  // DB에서 주어진 날짜의 time_reoced 조회
  //SELECT r.*, t.todo_text FROM time_record r LEFT JOIN todo t ON r.todo_id=t.todo_id 
  
  
  const recordlist = await conn.query('SELECT r.*, t.todo_text FROM time_record r LEFT JOIN todo t ON r.todo_id=t.todo_id where r.user_id=? AND date(start_time)=?', [userId, query_date]);
  conn.end();

  let result=[]
  for(let i=0; i<recordlist.length; i++){
    const element=recordlist[i];
    let record={};
    record.record_id=element.record_id;
    record.todo_id=element.todo_id;
    record.start_time=moment(element.start_time).format('yyyy-MM-DD HH:mm:ss').toString();
    record.end_time=moment(element.end_time).format('yyyy-MM-DD HH:mm:ss').toString();
    record.todo_text=element.todo_text;
    result.push(record);
  }
  console.log('data');
  console.log(result);
  res.json(result);
});

// 할일 등록 
router.post('/', auth, async (req, res)=>{
  const {todo_text}=req.body;
  const todo_date=getTodayDate();
  const conn = await db.getConnection();
  const rows = await conn.query(
    `INSERT INTO todo (todo_text, user_id, todo_date) VALUES(?, ?, ?)`, [todo_text, req.session.userId, todo_date]
  );
  conn.end();
  res.json({result:'ok', todo:rows});
});

// 할일 수정 - 완료처리
router.put('/:todoId', async (req, res)=>{
  const todoId = req.params.todoId;
  const todotext = req.params.todotext;
  const conn=await db.getConnection();
  const rows = await conn.query('select * from todo where todo_id=? and user_id=?', [ todoId, userId ])//?표에 들어갈 것은 다음 명령어? 배열에서 알려줌

  if(rows.length == 0) {
    res.status(403).json({error: 'Unauthorized or Not found'})
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
  const conn = await db.getConnection();
  conn.query(`DELETE FROM todo WHERE todo_id=${todoId}`)
  res.json({result:'ok'});

  conn.end();
});



module.exports = router;