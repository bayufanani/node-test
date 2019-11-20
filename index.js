var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  }); //write a response to the client
  res.end('Hello World!'); //end the response
}).listen(); //the server object listens on port 8080