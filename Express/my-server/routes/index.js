var express = require('express');
const userModel = require('../db/models/UserModel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/reg',function(req,res){
  console.log(req.body)
  let {user,pwd} = req.body;
  //mongoose提供的方法
  new userModel({
    user:user,
    pwd:pwd
  }).save().then(()=>{
    res.send({code:1,msg:'注册成功'})
  })
})

module.exports = router;
