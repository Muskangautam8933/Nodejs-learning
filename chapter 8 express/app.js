const express = require('express');
const app = express();

app.use("/",(req,res,next)=>{
    console.log("first middleware", req.url , req.method);
    next();
})

app.use((req,res,next)=>{
    console.log("second middleware",req.url , req.method);
    next();
})

app.get("/",(req,res,next)=>{
    console.log("Handling / for GET ", req.url , req.method);
    res.send("<h1>Welcome to express js</h1>")
})


app.get("/contact-us",(req,res,next)=>{
    console.log("Handling / for contact-us ", req.url , req.method);
    res.send(`
        <h1>give your details</h1>
        <form action="/contact-us" method="POST">
          <input type="text" placeholder="enter name" value="name"/>name<br>
           <input type="text" placeholder="enter email" value="email" /><br>
            <input type="password" placeholder="enter password" value="password" /><br>
             <input type="submit"  ></input>
        </form>
        `
    )
})

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling / for post ", req.url , req.method);
     res.send("<h1>Thanks for sharing details</h1>")
})
// app.use((req,res,next)=>{
//     console.log("third middleware",req.url,req.method);
//     res.send("<h1>Welcome to express js</h1>")
// })

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is runnig at http://localhost:${PORT} `);
})