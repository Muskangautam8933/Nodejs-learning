const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
              <head><title>Practice set</title></head>
              <body>
                 <h1>Welcome to calculator</h1>
                 <a href="/calculator"> Go to calculator</a>
              </body>
            </html>    
            `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <html>
              <head><title>Practice set</title></head>
              <body>
                 <h1>Here is your Calculator</h1>
                 <form action='/calculate-result' method = 'POST'>
                   <input type="text" placeholder="Enter first number" name="first">
                   <input type="text" placeholder="Enter second number" name="second">
                   <input type="submit" value="sum">
                 </form>
              </body>
            </html>    
            `);
    return res.end();


  } else if (
    req.url.toLowerCase() == "/calculate-result" &&
    req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
            <html>
              <head><title>Practice set</title></head>
              <body>
                 <h1>404 page does not exist</h1>
                 <a href="/"> Go to home</a>
              </body>
            </html>    
            `);
  return res.end();
};

exports.requestHandler = requestHandler;
