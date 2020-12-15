var express = require('express');
var router = express.Router();
const Forward = require('../model/forward');
const User = require('../model/user');


router.get('/', function(req, res, next) {
    res.send('forward');
});



router.post('/addForward',async (req,res)=>{

    let receiverExist = await User.find({username:req.body.receiverName}).exec();

    if(receiverExist.length == 0){
        res.status(400).json({
            status:400,
            res_msg:"Sorry,the receiver does not exist!"
        });
        return;
    }

    let receiverID = receiverExist[0].userID;

    if(receiverID == req.body.senderID){
        res.status(400).json({
            status:400,
            res_msg:"Sorry,you can't send the msg to yourself!"
        });
        return;
    }

    let forwardalreadyexist = await Forward.find({messageID:req.body.messageID,senderID:req.body.senderID,receiverID:receiverID}).exec();

    if(forwardalreadyexist.length == 1){
        res.status(403).json({
            status:403,
            res_msg:"The forward already exists!"
        });
        return;
    }


    var newforward = new Forward({

        messageID : req.body.messageID,
        senderID : req.body.senderID,
        receiverID : receiverID


    })

    newforward.save(function (err) {
        if(err){
            console.log(err);
            return;
        }
        console.log("add forward success");
        res.status(200).json({
            status:200,
            res_msg:"Add Forward Success!"
        });
    });

})


module.exports = router;
