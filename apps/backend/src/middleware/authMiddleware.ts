import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
      res.status(403).json({
        message: 'User not authorized',
      });
    }
    const token = authHeader?.split(' ')[1];

    const decodeToken = jwt.verify(
      token,
      process.env.JWT_SECRET_TOKEN || 'your-secret-key'
    );
    if (req.username == decodeToken.username) {
      next();
    }
    return res.status(403).json({
      message: 'Session not valid login again',
    });
  } catch (error) {
    return res.status(403).json({
      message: 'Authorization not valid',
      error,
    });
  }
};
