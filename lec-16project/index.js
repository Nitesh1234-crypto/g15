const express = require("express");
const app= express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.set("view engine","hbs");
mongoose.connect("mongodb://127.0.0.1:27017/myblogapp")
.then(()=>{
    console.log("database connected!!")
})
app.listen(2223,()=>{
    console.log("server started")
})
