const express = require("express");
const app= express();
const mongoose = require("mongoose");
const User = require("./model/user")
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set("view engine","hbs");
app.get("/",(req,res,next)=>{
    
    res.render("home");
    
})


app.get("/users/register",(req,res,next)=>{
    res.render("addUser");
    
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
app.get("/users/getalluser",async(req,res)=>{
    let allusers= await User.find();
    console.log(allusers)
    res.render("users",{
        users:allusers
    })
})


mongoose.connect("mongodb://127.0.0.1:27017/myblogapp")
.then(()=>{
    console.log("database connected!!")
})
app.listen(2223,()=>{
    console.log("server started")
})
