const mongoose = require('./db.js');


//define Schema

let ForwardSchema = mongoose.Schema({

    messageID:{
        type:Number,
    },
    senderID:Number,
    receiverID:Number,

    creation_date:{
        type:Date,
        default:Date.now()
    }

},{versionKey:false}); //delete _v  version key



let ForwardModel = mongoose.model('Forward',ForwardSchema,'forward');  //users

module.exports=ForwardModel;