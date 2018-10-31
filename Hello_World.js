const http = require('http');

const hostname = "127.0.0.1";
const port = 40000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World\n");
    console.log("log");
});

server.listen( port, hostname, () => {
    console.log(`Server Running at http://${port}:${hostname}`);
});