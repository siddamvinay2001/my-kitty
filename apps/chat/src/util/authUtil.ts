import jwt from 'jsonwebtoken';
import { Request } from 'express';

export const getDecodedTokenFromRequest = async (req: Request): Promise<any> => {
    try {
        const authHeaders = req.headers.authorization;
        if (!authHeaders) {
            throw new Error("Invalid request");
        }
        const token = authHeaders.split(" ")[1];
        if (!token) {
            throw new Error("Token not found");
        }
        const decodedToken: any = await new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET_TOKEN as string, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });

        return decodedToken;
    } catch (err) {
        throw new Error("Invalid token");
    }
};
