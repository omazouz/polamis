const mongoose = require('./db.js');

let userID = 100;
//define Schema

let UserSchema = mongoose.Schema({

    username:{
        type:String,

    },
    userID:{
        type:Number,
        default:userID,
        unique:true
    },
    password:String,
    age:{
        type:Number,
        min:0,
        max:200
    },
    sex:String,
    city:String,
    country:String,
    nationality:String,
    registration_date:{
        type:Date,
        default:Date.now()
    }

},{versionKey:false}); //delete _v  version key



let UserModel = mongoose.model('User',UserSchema,'user');  //users

module.exports=UserModel;