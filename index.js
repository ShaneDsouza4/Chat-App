const http = require('http'); //http module to attach WS
const express = require('express');
const path = require("path");

const app = express();
const server = http.createServer(app);

app.use(express.static(path.resolve("./public")))

app.get("/", (req, res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(8000, ()=>console.log("Server running at PORT:8000"));
 