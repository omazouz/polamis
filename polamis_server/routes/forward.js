var express = require('express');
var router = express.Router();
const Forward = require('../model/forward');
const User = require('../model/user');
const Message = require('../model/message');
const Topic = require('../model/topic');


router.get('/', function(req, res, next) {
    res.send('forward');
});


router.post('/addForward',async (req,res)=>{

//    *******************************************
// Add Message Collection part
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

    let messageID = biggestID+1;
    var newmessage = new Message({

        messageID : messageID,
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
    });






//    *******************************************
// forward collection part

    let receiverExist = await User.find({userName:req.body.receiverName}).exec();

    if(receiverExist.length == 0){
        res.status(400).json({
            status:400,
            res_msg:"Sorry,the receiver does not exist!"
        });
        return;
    }

    let addForwardFailureCount = 0;
    let addForwardSuccessCount = 0;
    let errorMsg ='Error';
    for (let index = 0; index<receiverExist.length;index++){
        let receiverID = receiverExist[index].userID;
        if(receiverID == req.body.senderID){
            errorMsg = "Sorry,you can't send the msg to yourself!";
            addForwardFailureCount++;
            continue;
        }

        let forwardalreadyexist = await Forward.find({messageID:messageID,senderID:req.body.senderID,receiverID:receiverID}).exec();

        if(forwardalreadyexist.length == 1){
            errorMsg = "The forward already exists!";
            addForwardFailureCount++;
            continue;
        }


        var newforward = new Forward({

            messageID : messageID,
            senderID : req.body.senderID,
            receiverID : receiverID


        })

        newforward.save(function (err) {
            if(err){
                console.log(err);
                return;
            }
            console.log("Add Forward Success");


        });
        addForwardSuccessCount++;
    }


    if(addForwardFailureCount != 0){
        res.status(400).json({
            status:400,
            res_msg:"Add "+ addForwardSuccessCount + " Forward Success," +
                "and add "+addForwardFailureCount+" Forward Failure! " +
                "Error:" + errorMsg,
        });
    }else {
        res.status(200).json({
            status: 200,
            res_msg: "Add Forward Success!"
        });
    }
    console.log(addForwardFailureCount);




    // let receiverID = receiverExist[0].userID;
    //
    // if(receiverID == req.body.senderID){
    //     res.status(400).json({
    //         status:400,
    //         res_msg:"Sorry,you can't send the msg to yourself!"
    //     });
    //     return;
    // }
    //
    // let forwardalreadyexist = await Forward.find({messageID:req.body.messageID,senderID:req.body.senderID,receiverID:receiverID}).exec();
    //
    // if(forwardalreadyexist.length == 1){
    //     res.status(403).json({
    //         status:403,
    //         res_msg:"The forward already exists!"
    //     });
    //     return;
    // }
    //
    //
    // var newforward = new Forward({
    //
    //     messageID : req.body.messageID,
    //     senderID : req.body.senderID,
    //     receiverID : receiverID
    //
    //
    // })
    //
    // newforward.save(function (err) {
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("add forward success");
    //     res.status(200).json({
    //         status:200,
    //         res_msg:"Add Forward Success!"
    //     });
    // });

});


module.exports = router;
