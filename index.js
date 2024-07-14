const http = require('http'); //http module to attach WS
const express = require('express');
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server); //Handles sockets

app.use(express.static(path.resolve("./public")))

// Socket 
io.on('connection', (socket) => {
    //console.log("New user has connected", socket.id);
    socket.on('user-message', message => {
        console.log("A new User Message ", message);
    })
})



//HTTP Requests
app.get("/", (req, res)=>{
    return res.sendFile("/public/index.html")
})

server.listen(8000, ()=>console.log("Server running at PORT:8000"));
 