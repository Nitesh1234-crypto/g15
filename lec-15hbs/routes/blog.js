const express=require("express");
const router = express.Router();
const Blog = require("../model/blog");
router.post("/",async(req,res)=>{
    let {title,content,author} = req.body;
    let newBlog= new Blog({
        title:title,
        content:content,
        author:author
    })
    await newBlog.save()
    res.send("blog added!!")
})

router.get("/",async(req,res)=>{
    //send a fully render blog page
    let blogs=await Blog.find();
    console.log(blogs)
    res.render("allblogs",{
        blogs:blogs
    })

})







module.exports=router;
