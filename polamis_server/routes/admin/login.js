var express = require('express');
var router = express.Router();
const JwtUtil = require('../../public/javascripts/jwt');
const User = require('../../model/user.js');


router.get('/', function(req, res, next) {
   res.send("user login page");
});

router.post('/doLogin',async (req,res)=>{

    let userResult = await User.findOne({username:req.body.username}).exec();

    // console.log(userResult);
    if(userResult != undefined) {

        if (req.body.password == userResult.password) {
            let jwt = new JwtUtil(userResult.userID.toString());
            let token = jwt.generateToken();
            res.status(200).json({
                status: 200,
                res_msg: "Login Successfully!",
                token: token,
                userID: userResult.userID

            });
        } else{
            res.status(403).json({
                status: 403,
                res_msg: "Incorrect account or password!",
            });
        }
    }else{

        res.status(404).json({
            status:404,
            res_msg:"Account does not exist!"
        });
    }




})

module.exports = router;
