var express = require('express');
var router = express.Router();


const loginRouter = require('./admin/login');
const userRouter = require('./admin/user');
const topicRouter = require('./admin/topic');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.use("/login",loginRouter);
router.use("/user",userRouter);
router.use("/topic",topicRouter);

module.exports = router;
