const http = require("http");

const routes = require('./routes');

// function rqListener(req, res) {
// };
// http.createServer(rqListener);
// http.createServer(function(req, res){
// });

console.log(routes.someText);

// const server = http.createServer(routes);
const server = http.createServer(routes.handler);

server.listen(3000);
