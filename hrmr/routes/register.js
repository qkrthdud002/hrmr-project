const dbcp = require('../model/dbcp');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/', async(req, res) => {
  const {userId, password} = req.body;

  const db = await dbcp.getConnection()
  const alreadyExistsUser = await db.query('select * from user_information where user_id=?', [userId]);
  console.log(alreadyExistsUser);
  if(alreadyExistsUser != null && alreadyExistsUser.length>0) {
    res.status(400).send({boom:'아이디 중복'})
    return
  }
  await db.query('insert into user_information(user_id, user_password) values(?, ?)', [userId, password]);
  db.end()

  res.json({result:'회원 등록 완료'})
  // res.json({result:'ok'});
})

module.exports = router;