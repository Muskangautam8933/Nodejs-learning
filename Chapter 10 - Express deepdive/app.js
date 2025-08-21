//core module
// const http = require('http');

//external module
const express = require('express');
const bodyParser = require('body-parser');

//local module
// const requestHandler =  require('./user');

const app = express();

app.use((req,res,next)=>{
    console.log("Came in first middleware" , req.url , req.method);
    next();
})

app.use('/submit-details',(req,res,next)=>{
    console.log("Server is coming in second middleware", req.url , req.method);
    next();
})

// const server = http.createServer(app);
app.get("/",(req,res,next)=>{
  console.log("Handling / for GET" , req.url , req.method);
  res.send(`<h1>Welcome to complete coding</h1>`);
})

app.get("/contact-us", (req,res,next)=>{
  console.log("Handling /contact us for GET", req.url , req.method);
  res.send(`<h1>Please give your details</h1>
     <form action="/contact-us" method="POST">
      <input type="text" placeholder="Enter your name"></input>
      <input type="text" placeholder="Enter your email"></input>
      <input type="submit" />
     </form>
    `)  
})

app.post("/contact-us",(req,res,next)=>{
  console.log("First handling" , req.url , req.method);
  req.body;
  next();
})

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling /contact-us for POST", req.url , req.method, req.body );
  res.send(`<h1>We will contact you shortly</h1>`)
  
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});