const mongoose = require('./db.js');


//define Schema

let TopicSchema = mongoose.Schema({

    topicName:{
        type:String,

    },
    topicID:{
        type:Number,
        unique:true
    },
    origin_message:{
        type:String
    }

},{versionKey:false}); //delete _v  version key



let TopicModel = mongoose.model('Topic',TopicSchema,'topic');  //users

module.exports=TopicModel;