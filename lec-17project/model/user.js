const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("User",userSchema); //1. model name, 2 schema