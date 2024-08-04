import { Request, Response, NextFunction } from 'express';
import { getDecodedTokenFromRequest } from '../util/authUtil';

interface CustomRequest extends Request{
    username?: string;
    userId?: string;
}

export const authMiddleware = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const decodedToken: any = await getDecodedTokenFromRequest(req);
        if (!decodedToken || !decodedToken.userId) {
            return res.status(401).json({ message: "Invalid user" });
        }
        req.username = decodedToken.username;
        req.userId = decodedToken.userId;
        next();
    } catch (err) {
        return res.status(401).json({ message: "User is not verified", error: err.message });
    }
};
