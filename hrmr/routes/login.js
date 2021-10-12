var express = require('express');
const dbcp=require('../model/dbcp');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const conn=await dbcp.getConnection();
  res.render('login', { title: 'Express' });
});

router.get('/login',(req, res)=>{
  res.render('login');
});

router.post('/login', async(req, res)=>{
  const {userId, password} = req.body;
  let result='';

  const conn=await dbcp.getConnection();
  const rows = await conn.query('select userId, password from user where userId=?',[userId])//?표에 들어갈 것은 다음 명령어? 배열에서 알려줌
  conn.end();

  if(rows.length==0){
    result='등록되지 않은 사용자 입니다.';
  }
  else {
    const db_user=rows[0];
    if(db_user.password==password){
      result='반갑습니다.';
      req.session.userId=userId;//req.session.는 정해져 있는 것, userId부분은 내가 정하는 것(변수 하나 지정, 변수 호출)
    }
    else
      result='비밀번호 오류입니다.';
  }
 
  res.render('login', {result:result});
});

module.exports = router;