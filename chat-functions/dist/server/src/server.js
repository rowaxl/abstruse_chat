"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const server = http.createServer(app);
const WSServer = new WebSocket.Server({ server });
WSServer.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('Recieve message: ', message);
        ws.send(`You send: ${message}`);
    });
    ws.send('Hi, I\'m WSServer');
});
server.listen(process.env.PORT || 9000, () => {
    const { port } = server.address();
    console.log(`Server listen on ${port}`);
});
//# sourceMappingURL=server.js.map