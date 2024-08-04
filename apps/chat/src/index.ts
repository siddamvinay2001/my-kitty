import express, { Request, Response, NextFunction } from 'express';
import { WebSocketServer, WebSocket } from 'ws';
import { manageSocketConnections, getConnectedClients } from './controllers/wsInitController';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/authMiddleware';
import { prisma } from '@my-kitty/database/db';
import { getAllUserIdExcept } from './util/usersUtil';

interface CustomRequest extends Request{
    username?: string;
    userId?: string;
}

dotenv.config();

const app = express();
const httpServer = app.listen(process.env.WS_PORT || 3005, () => {
    console.log(`PORT ${process.env.WS_PORT} is live`);
});

const wsServer = new WebSocketServer({ noServer: true });

httpServer.on('upgrade', (request: Request, socket: any, head: Buffer) => {
    wsServer.handleUpgrade(request, socket, head, (ws: WebSocket) => {
        manageSocketConnections(ws, request);
    });
});

app.use(express.json());

app.post('/send-message', authMiddleware, async (req: CustomRequest, res: Response) => {
    try{
        const {userId} = req;
        const {message, groupId} = req.body.message;

        const usersInGroup = getAllUserIdExcept(groupId,userId);
        console.log(usersInGroup);

        return res.status(200).json({
            usersInGroup
        })


    }catch(err){
        return res.status(500).json({
            message : "Unable to send messages",
            err
        })
    }
});
