import { Request, Response, NextFunction } from 'express';
import { signupSchema } from '../zod/userSchema.js';

export const signupValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    signupSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      message: 'Bad Request',
      error,
    });
  }
};
