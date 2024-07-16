import { Request, Response } from 'express';
import pkg from 'bcryptjs';
import jwt from 'jsonwebtoken';
const { hashSync } = pkg;

export const signup = async (req: Request, res: Response) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { phoneNumber: phoneNumber ? phoneNumber : undefined },
          { email: email ? email : undefined },
        ],
      },
    });

    if (user) {
      return res.status(400).json({
        message:
          'User already exists. Please login or click on forgot passsword to reset password',
      });
    }

    const hashedPassword = await hashSync(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        email: email ? email : null,
        phoneNumber: phoneNumber ? phoneNumber : null,
        username: email ? email : phoneNumber ? phoneNumber : null,
        password: hashedPassword,
      },
    });

    const token = jwt.sign(
      { userId: newUser.id, username: newUser.username },
      process.env.JWT_SECRET_TOKEN || 'your-secret-key',
      { expiresIn: '7d' } // Token expires in 7 days
    );

    return res.status(200).json({
      message: 'User is created successfully',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        username: newUser.username,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal Server Error',
      error,
    });
  }
};

export const test = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: 'Bad Request',
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Bad Request',
      error,
    });
  }
};
