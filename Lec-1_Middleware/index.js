const express = require("express");
const app = express();
app.use(m1);
app.use(m2);

app.get("/",(req,res)=>{
    console.log("running get request on path /")
    res.send("Home")
})

app.get("/about",m4,(req,res)=>{
    console.log("running about get request");
    res.send("about page")
})
app.get("/admindashboard/:username",checkisAdmin,(req,res)=>{
    res.send("admin dashboard");
})
function checkisAdmin(req,res,next){
    const {username} = req.params;
    if(username=="Nitesh"){
        next();

    }else{
        res.send("You are not authorised to view admin dashboard")
    }
}


function m4(req,res,next){
     console.log("running middleware 4");
     next()
}


function m1(req,res,next){
    console.log("running middleware 1")
    next()
}
function m2(req,res,next){
    console.log("running middleware 2");
    next();
}


app.listen(4444,()=>{
  console.log("server started")
})