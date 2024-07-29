import express from 'express';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const httpServer = app.listen(process.env.WS_PORT || 3002, () => console.log(`PORT ${process.env.WS_PORT} is live`));

const server = new WebSocketServer({ server: httpServer });

server.on('connection', (ws) => {
    ws.on('error', (err) => console.log(err));

    ws.on('message', (data, isBinary) => {
        server.clients.forEach((client) => {
            if (client.readyState == WebSocket.OPEN) {
                client.send(data, { binary: isBinary })
            }
        })
    })
    ws.send("From webscoket")
})
