const http = require('http'); //http module to attach WS
const express = require('express');

const app = express();
const server = http.createServer(app);

server.listen(800, ()=>console.log("Server running at PORT:8000"));
 