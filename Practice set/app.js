const express = require('express');

const app = express();

app.use( (req,res,next)=>{
    console.log("First dummy middleware", req.url , req.method);
    next();
})

app.use( (req,res,next)=>{
    console.log("Second dummy middleware",req.url , req.method);
    next();
})


// app.use( (req,res,next)=>{
//     console.log("Second dummy middleware",req.url , req.method);
//     res.send("<h1>Welcome to node js series</h1>")
// })

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET", req.url, req.method);
    res.send(`<h1>Welcome to node js series</h1>`)
})


app.get("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us for GET", req.url, req.method);
    res.send(`
        <h1>Please give your details</h1>
        <form action="/contact-us" method="POST">
          <input type="text" placeholder="enter name ">Name :</input> <br>

          <input type="email" placeholder="enter email ">Email :</input> <br>
          <input type="password" placeholder="enter password ">Password :</input>
          <input type="submit"> submit</input>
        </form>
        `
        
    )
})


app.post("/contact-us", (req,res,next)=>{
    console.log("Handling /contact-us for POST", req.url , req.method)
    res.send(`<h1>Thanks for sharing your details</h1>`)
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})