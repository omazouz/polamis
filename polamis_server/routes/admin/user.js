var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send("user list");
});

router.get('/add',(req,res)=>{
    res.send("add user");

})

router.get('/edit',(req,res)=>{
    res.send("edit user");

})

router.post('/doAdd',(req,res)=>{
    res.send("do add user");

})

router.post('/doEdit',(req,res)=>{
    res.send("do edit user");

})

module.exports = router;