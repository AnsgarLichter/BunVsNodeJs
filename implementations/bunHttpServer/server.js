Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Hello from Bun!");
    },
});