
const fs = require("fs");
//this is how we can do routing.
const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Enter Your details :</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"/><br>'
    );
    res.write('<label for="male">male</label>');
    res.write('<input type="radio" name="gender" id="male" value="male"/><br>');

    res.write('<label for="female">female</label>');
    res.write(
      '<input type="radio" name="gender" id="female" value="female"/><br>'
    );
    res.write('<input type="submit" value="submit"/>')
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
   
    const body = []
    req.on("data",(chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", ()=>{
       const fullBody =  Buffer.concat(body).toString();
       console.log(fullBody);
       const params = new URLSearchParams(fullBody);
    //    const bodyObject = {};
    //    for(const[key , value] of params.entries()){
    //     bodyObject[key] = value;
    //    }


    //short form
    const bodyObject = Object.fromEntries(params);
       console.log(bodyObject);
       fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
    })


    
       res.statusCode = 302;  //302 ka mtln redirect
       res.setHeader('Location',  '/');

  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Welcome to our default page</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports = requestHandler;  //export module