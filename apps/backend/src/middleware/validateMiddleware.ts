import { Request, Response, NextFunction } from 'express';
import { signupSchema } from '../zod/userSchema';
import { ZodSchema } from 'zod';

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

export const validateMiddleware =
  (schema: ZodSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        message: 'Invalid inputs',
        error,
      });
    }
  };
