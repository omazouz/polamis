const mongoose = require('mongoose');


const DB_URL = 'mongodb://localhost:27017/pfe'

//mongodb connection
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},function (err) {
    if(err){
        console.log("Error:MongoDB database PFE connection failure!");
        console.log(err);
        return;
    }
    console.log("Successfully connected to the MongoDB database PFE");
});


module.exports=mongoose;