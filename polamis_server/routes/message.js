var express = require('express');
var router = express.Router();
const Message = require('../model/message');
const Topic = require('../model/topic');
const Forward = require('../model/forward');


router.get('/receiveMessage', async function(req, res, next) {
    let receiverID = req.query.userID;

    let receiveForward = await Forward.find({receiverID:receiverID}).sort({receiverID:-1}).exec();

    if(receiveForward.length == 0){
        res.status(404).json({
            status:404,
            res_msg:"Sorry,you didn't receive any msg!"
        })
        return;
    }

    let receiveMessage = [];

    let lastindex = 0;

    for(let i=0; i<receiveForward.length;i++){
        if(receiveForward[i].messageID != lastindex){
            lastindex = receiveForward[i].messageID;
            let message = await Message.find({messageID:lastindex}).exec();
            receiveMessage.push(message[0].text);
        }
    }

    console.log("Get Message Success");
    res.status(200).json({
        status:200,
        res_msg:"Get Message Success!",
        data:receiveMessage
    })
    return;





});



router.post('/addMessage',async (req,res)=>{

    let bigggestMessage = await Message.find().sort({messageID:-1}).skip(0).limit(1).exec();

    let biggestID = 0;
    if (bigggestMessage.length != 0){
        biggestID = bigggestMessage[0].messageID;
    }

    let findtopicID = await Topic.find({topicname:req.body.topicname}).exec();

    if(findtopicID.length == 0){
        res.status(400).json({
            status:400,
            res_msg:"Sorry,we can't find this topic!"
        });
        return;
    }

    let topicID = findtopicID[0].topicID;

    var newmessage = new Message({

        messageID : biggestID+1,
        topicID : topicID,
        text : req.body.text,


    })

    newmessage.save(function (err) {
        if(err){
            console.log(err);
            return;
        }
        console.log("Add Message Success");
        res.status(200).json({
            status:200,
            res_msg:"Add Message Success!"
        });
    });

})





module.exports = router;
