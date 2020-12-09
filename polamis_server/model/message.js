const mongoose = require('./db.js');


//define Schema

let MessageSchema = mongoose.Schema({

    messageID:{
        type:Number,
        unique:true
    },
    topicID:Number,
    text:String,
    misinformation_level:{
        type:Number,
        default:0,
        min:0,
        max:5
    },
    creation_date:{
        type:Date,
        default:Date.now()
    }

},{versionKey:false}); //delete _v  version key



let MessageModel = mongoose.model('Message',MessageSchema,'message');  //users

module.exports=MessageModel;