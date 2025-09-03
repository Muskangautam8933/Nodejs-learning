const path = require('path')
const express = require('express');
const userRouter = express.Router();
const rootDir = require("../utils/pathUtil")


userRouter.get("/",(req,res,next)=>{
    console.log("second middleware",req.url,req.method)
    res.sendFile(path.join(rootDir , "views", "home.html"));
    
})

module.exports = userRouter;