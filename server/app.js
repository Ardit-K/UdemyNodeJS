const http = require('http');

//custom module
const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);