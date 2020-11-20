var express = require('express');
var router = express.Router();


const loginRouter = require('./admin/login');
const userRouter = require('./admin/user');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use("/login",loginRouter);
router.use("/user",userRouter);

module.exports = router;
