const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    const message = "NodeJS says hello";
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (req.url.endsWith("/ab")) {
        let array = [];
        for (let index = 0; index < 1_000_000; index++) {
            array[index] = index;
        }

        return res.end(message);
    }
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
