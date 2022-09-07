const http = require("http");
const fs = require("fs");

// function rqListener(req, res) {
  
// };
// http.createServer(rqListener);

// http.createServer(function(req, res){

// });

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');

    // Quit function execution
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.text', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  // Write some data to response
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');

  // Once we are done creating response.
  res.end();
});

server.listen(3000);