const mongoose = require('mongoose')

const userschema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        mobile:{
            type:Number,
        },
        password:{
            type:String,
        },
    }
);

module.exports = mongoose.model("User",userschema)