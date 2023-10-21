import { createReadStream } from "node:fs";
import http from "node:http";

const basePath = "../data";

http.createServer((request, response) => {
    const filePath = `${basePath}${request.url}`;
    const readStream = createReadStream(filePath);

    readStream.on("open", () => {
        response.setHeader("content-type", "image/png");
        response.writeHead(200);

        readStream.pipe(response);
    });

    readStream.on("error", () => {
        response.writeHead(404, "Image not found");
        response.end();
    });
}).listen(3000);