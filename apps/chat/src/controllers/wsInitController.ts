import { WebSocket } from 'ws';
import { Request } from 'express';
import { getDecodedTokenFromRequest } from '../util/authUtil';

const connectedClients = new Map<string, WebSocket>();

export const manageSocketConnections = async (ws: WebSocket, req: Request) => {
    try {
        const decodedToken: any = await getDecodedTokenFromRequest(req);
        if (!decodedToken || !decodedToken.userId) {
            throw new Error("Invalid user");
        }
        const userId = decodedToken.userId;
        connectedClients.set(userId, ws);

        ws.on('close', () => {
            for (let [userId, clientWs] of connectedClients.entries()) {
                if (clientWs === ws) {
                    connectedClients.delete(userId);
                    break;
                }
            }
        });
    } catch (err) {
        console.error('ERROR:', err);
        ws.close();
    }
};

export const getConnectedClients = () => connectedClients;
