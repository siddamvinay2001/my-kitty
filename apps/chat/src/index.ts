import express, { Request, Response, NextFunction } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { manageSocketConnections, getConnectedClients } from './controllers/wsInitController';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware';
import { connectToPostgresql, connectToMongoose } from '@my-kitty/database/db';
import { getAllUsersInGroup } from '@my-kitty/database/user';
import { sendLiveMessages } from './controllers/messageController';

interface CustomRequest extends Request{
    username?: string;
    userId?: string;
}

dotenv.config();

const app = express();
const httpServer = app.listen(process.env.WS_PORT || 3005, async() => {
    await connectToPostgresql();
    await connectToMongoose(process.env.MONGO_URI);
    console.log(`PORT ${process.env.WS_PORT} is live`);
});

const wsServer = new WebSocketServer({ noServer: true });

httpServer.on('upgrade', (request: Request, socket: any, head: Buffer) => {
    wsServer.handleUpgrade(request, socket, head, (ws: WebSocket) => {
        manageSocketConnections(ws, request);
    });
});

app.use(express.json());

app.post('/send-message', authMiddleware, sendLiveMessages);
