var express = require('express');
var router = express.Router();
var db = require('../model/dbcp');
const auth=require('./interceptor');

const getTodayDate = () => {
    //query_date에 오늘 날짜 저장.
    //1. query_date.subtring(start_index, end_index);
    // var hour=string.substr();
    // var minute=string.substr();
    // var count=string.substr();

    //2. var str = dt.getYear()+'-'+(dt.getMonth()+1)+'-'+dt.Date();

    //3. var month = dt.getMonth()+1;
    // var day = dt.getDate();
    // var year = dt.getFullYear();
    //document.write(month + '-' + day + '-' + year);

    
    //function getCurrentDate()
    //{
    var date = new Date();
    var year = date.getFullYear().toString();

    var month = date.getMonth() + 1;
    
    month = month < 10 ? '0' + month.toString() : month.toString();

    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();

    return year + '-'+ month + '-'+ day ;
}

/* GET home page. */
router.get('/', auth, async (req, res)=> {
  const query_date = req.query.date || getTodayDate();
  const conn = await db.getConnection();
  const userId = req.session.userId;
  if(userId==null || userId == undefined){
    res.render('todolist');
    return;
  }
  console.log(query_date)

  //DB에서 주어진 날짜의 todo list조회
  const todolist = await conn.query('select * from todo where todo_date=? and user_id=?', [query_date, userId]);
  
  // DB에서 주어진 날짜의 time_reoced 조회
  const recordlist = await conn.query('select * from time_record where user_id=? AND date(start_time)=?', [userId, query_date]);
  console.log('record')
  console.log(recordlist)
  
  conn.end();
  res.render('todolist', {todolist: recordlist, userId:req.session.userId});
});

// 할일 등록 
router.post('/todolist', async (req, res)=>{
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
  const conn = await dbcp.getConnection();
  conn.query(`DELETE FROM todo WHERE todo_id=${todoId}`)
  res.json({result:'ok'});
});

module.exports = router;