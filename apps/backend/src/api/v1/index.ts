import { Router } from 'express';
import { signupValidator } from '../../middleware/validateMiddleware.js';
import { signup } from '../../controllers/authController.js';

const v1Router: Router = Router();

v1Router.post('/signup', signupValidator, signup);

export default v1Router;
