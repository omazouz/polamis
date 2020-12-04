const mongoose = require('./db.js');


//define Schema

let TopicSchema = mongoose.Schema({

    topicname:{
        type:String,

    },
    topicID:{
        type:Number,
        unique:true
    },
    messagesID:{
        type:Array
    }

},{versionKey:false}); //delete _v  version key



let TopicModel = mongoose.model('Topic',TopicSchema,'topic');  //users

module.exports=TopicModel;