const express = require('express');
const router = express.Router();
const User = require('../../model/user.js');



//return all users in the db
router.get('/', function(req, res, next) {
    User.find().exec(function (err,data) {
        res.json({"data":data});
    })
});

//Query the user of a certain id
router.get('/:userID',function (req,res,next) {
    var userID = req.params.userID;
    console.log("userID:"+userID);
    User.find({"userID":userID}).exec(function (err,data) {
        res.json({"data":data});
    })

})


router.post('/addUser',async (req,res)=>{


    let bigggestUser = await User.find().sort({userID:-1}).skip(0).limit(1).exec();
    let biggestID = bigggestUser[0].userID;
    var newuser = new User({

    username : req.body.username,
    userID : biggestID+1,
    password : req.body.password,
    age : req.body.age,
    sex : req.body.sex,
    city : req.body.city,
    country : req.body.country,
    nationality : req.body.nationality

    })

    newuser.save(function (err) {
        if(err){
            console.log(err);
            return;
        }
        console.log("add user success");
        res.send('Add User Success');
    });

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

router.get('/find',(req,res)=>{

})

module.exports = router;