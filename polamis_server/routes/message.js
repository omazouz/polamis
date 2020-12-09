var express = require('express');
var router = express.Router();
const Message = require('../model/message');
const Topic = require('../model/topic');


router.get('/', function(req, res, next) {
    res.send('message');
});



router.post('/addMessage',async (req,res)=>{


    let bigggestMessage = await Message.find().sort({messageID:-1}).skip(0).limit(1).exec();

    let biggestID = 0;
    if (bigggestMessage.length != 0){
        biggestID = bigggestMessage[0].messageID;
    }

    let findtopicID = await Topic.find({topicname:req.body.topicname}).exec();

    if(findtopicID.length == 0){
        res.send("Sorry,we can't find this topic!");
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
        console.log("add message success");
        res.send('Add Message Success');
    });

})


module.exports = router;
