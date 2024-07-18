import { Router } from 'express';
import { validateMiddleware } from '../../middleware/validateMiddleware.js';
import { signup, login } from '../../controllers/authController.js';
import { loginSchema, signupSchema } from '../../zod/userSchema.js';

const v1Router: Router = Router();

v1Router.post('/signup', validateMiddleware(signupSchema), signup);
v1Router.post('/login', validateMiddleware(loginSchema), login);

export default v1Router;
