import http from "node:http";

http.createServer(function (request, response) {
    response.write("Hello World!")
    response.end();
}).listen(3000);