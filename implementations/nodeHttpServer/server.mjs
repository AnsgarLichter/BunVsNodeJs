import http from "node:http";

http.createServer(function (request, response) {
    response.write('Hello from Node.js!')
    response.end();
}).listen(3000);