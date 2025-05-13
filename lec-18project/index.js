const express = require("express");
const app= express();
const mongoose = require("mongoose");
const User = require("./model/user")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs");
app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/users/register",(req,res)=>{
    res.render("addUser")
})
app.post("/users/register",async(req,res)=>{
        let {username , email,password} = req.body;
        console.log(username, email,password);
        let newUser= new User({
            username,
            email,
            password
        })
       await newUser.save()
       res.redirect("/")
})



mongoose.connect("mongodb://127.0.0.1:27017/myblogapp")
.then(()=>{
    console.log("database connected!!")
})
app.listen(2223,()=>{
    console.log("server started")
})
