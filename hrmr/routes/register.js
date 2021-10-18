const dbcp = require('../model/dbcp');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', async (req, res) => {
  const { userId, password, passwordcheck } = req.body
  if(password !== passwordcheck) {
    res.set(400).send('Bad request: 비번이랑 확인용 비번 달라요')
    return
  }
  
  const db = await dbcp.getConnection()
  const alreadyExistsUser = await db.query(`SELECT * FROM user_information WHERE user_id=${userId}`)
  if(alreadyExistsUser != null || alreadyExistsUser != undefined) {
    // TODO: 유저 중복 예외처리
  }

})

module.exports = router;