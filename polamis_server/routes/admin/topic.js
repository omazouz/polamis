const express = require('express');
const router = express.Router();
const Topic = require('../../model/topic');



//return all topic
router.get('/', function(req, res, next) {
    Topic.find().exec(function (err,data) {
        res.json({"data":data});
    })
});




router.post('/addTopic',async (req,res)=>{


    let bigggestTopic = await Topic.find().sort({topicID:-1}).skip(0).limit(1).exec();
    let biggestID = 0;
    if (bigggestTopic.length != 0){
        biggestID = bigggestTopic[0].topicID;
    }

    var newtopic = new Topic({
        topicname : req.body.topicname,
        topicID : biggestID+1,
        messagesID : req.body.messagesID,
    })



    newtopic.save(function (err) {
        if(err){
            console.log(err);
            return;
        }
        console.log("add topic success");

        res.send('Add topic Success');
    });

})

router.get('/edit',(req,res)=>{
    res.send("edit topic");

})


module.exports = router;