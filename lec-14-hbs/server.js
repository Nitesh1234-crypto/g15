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
app.get("/blogpage",(req,res)=>{
  res.render("blogs",{
      blogs:[
        {
          id:1,
          title:"my first blogs",
          content:"jsdjfdsjfasfhdsfhs",
          banner:"https://imgs.search.brave.com/L7O4i5GfOEzJwjCUtNhlZJXThMtp1i6mvcbd_GVPvK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIz/ODkyMjQyL3Bob3Rv/L3N1bnJpc2Utb3Zl/ci1jYW5kb2xpbS1i/ZWFjaC1pbi1nb2Et/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZEbWF4/VU5QMl9kdWJnMk5J/ckhuTi1pbEp1Q1ZC/VVcyUnNzYWV4TWNm/bDQ9"

        },
        {
          id:2,
          title:"my second blogs",
          content:"jsdjfdsjfasfhdsfhs",
          banner:"https://imgs.search.brave.com/L7O4i5GfOEzJwjCUtNhlZJXThMtp1i6mvcbd_GVPvK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIz/ODkyMjQyL3Bob3Rv/L3N1bnJpc2Utb3Zl/ci1jYW5kb2xpbS1i/ZWFjaC1pbi1nb2Et/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZEbWF4/VU5QMl9kdWJnMk5J/ckhuTi1pbEp1Q1ZC/VVcyUnNzYWV4TWNm/bDQ9"
        }
      ]

    // title:"my first blogs",
    // content:"jsdjfdsjfasfhdsfhs",
    // banner:"https://imgs.search.brave.com/L7O4i5GfOEzJwjCUtNhlZJXThMtp1i6mvcbd_GVPvK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIz/ODkyMjQyL3Bob3Rv/L3N1bnJpc2Utb3Zl/ci1jYW5kb2xpbS1i/ZWFjaC1pbi1nb2Et/aW5kaWEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUZEbWF4/VU5QMl9kdWJnMk5J/ckhuTi1pbEp1Q1ZC/VVcyUnNzYWV4TWNm/bDQ9"
  })
})

app.use("/users",userRoutes);
app.use("/blogs",blogRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/g26mondb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));
app.listen(4434,(req,res)=>{
    console.log("server started")
})