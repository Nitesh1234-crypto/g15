const express = require("express");
const app= express();
const mongoose = require('mongoose');
const userRoutes= require("./routes/user")
const blogRoutes= require("./routes/blog")
app.use(express.json());
app.set('view engine', 'hbs');
app.get("/",(req,res)=>{
  res.render("home")
})

app.use("/users",userRoutes);
app.use("/blogs",blogRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4434,(req,res)=>{
    console.log("server started")
})