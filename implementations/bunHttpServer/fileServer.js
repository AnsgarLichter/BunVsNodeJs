const basePath = "./data";

Bun.serve({
    port: 3000,
    fetch(request) {
        const filePath = `${basePath}${new URL(request.url).pathname}`;

        try {
            return new Response(Bun.file(filePath));
        } catch (error) {
            return new Response("File not found", {
                status: 404
            });
        }
    },
});