const dbcp = require('../model/dbcp');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.post('/', async (req, res) => {
  const { userId, password} = req.body
  console.log(userId)
  const db = await dbcp.getConnection()
  const alreadyExistsUser = await db.query(`SELECT * FROM user_information WHERE user_id=${userId}`)
  if(alreadyExistsUser != null || alreadyExistsUser != undefined) {
    res.set(409).send({boom:'아이디 중복'})
    return
  }
  const queryData = `${userId}, ${password}`
  db.query(`INSERT INTO user_information(user_id, user_password) VALUES(${queryData})`)

  res.set(201).send({result:'user create'})
  // res.json({result:'ok'});
})

module.exports = router;