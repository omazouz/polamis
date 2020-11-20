var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.send("user login page");
});

router.post('/doLogin',(req,res)=>{
    res.send("do user login successfully");

})

module.exports = router;
