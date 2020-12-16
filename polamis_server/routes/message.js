var express = require('express');
var router = express.Router();
const Message = require('../model/message');
const Topic = require('../model/topic');
const Forward = require('../model/forward');


router.get('/receiveMessage/:userID', async function(req, res, next) {
    let receiverID = req.params.userID;

    let receiveForward;

    receiveForward = await Forward.find({receiverID:receiverID}).sort({receiverID:-1}).exec();

    if(receiveForward.length == 0){
        res.status(404).json({
            status:404,
            res_msg:"Sorry,you didn't receive any msg!"
        })
        return;
    }



    let lastindex = 0;
    let messageArray = [];


    if(req.query.topicID != undefined){
        for(let i=0; i<receiveForward.length;i++){
            if(receiveForward[i].messageID != lastindex){
                lastindex = receiveForward[i].messageID;
                let message = await Message.find({messageID:lastindex,topicID:req.query.topicID}).exec();
                if(message.length != 0) {
                    messageArray.push(message);
                }
            }
        }
    }
    else{
        for(let i=0; i<receiveForward.length;i++){
            if(receiveForward[i].messageID != lastindex){
                lastindex = receiveForward[i].messageID;
                let message = await Message.find({messageID:lastindex}).exec();
                messageArray.push(message);
            }
        }
    }

    console.log("Receive Message Success");
    res.status(200).json({
        status:200,
        res_msg:"Receive Message Success!",
        data:messageArray
    })
    return;





});



router.post('/addMessage',async (req,res)=>{

    let bigggestMessage = await Message.find().sort({messageID:-1}).skip(0).limit(1).exec();

    let biggestID = 0;
    if (bigggestMessage.length != 0){
        biggestID = bigggestMessage[0].messageID;
    }

    let findtopicID = await Topic.find({topicName:req.body.topicName}).exec();

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
        topicName : req.body.topicName,
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
