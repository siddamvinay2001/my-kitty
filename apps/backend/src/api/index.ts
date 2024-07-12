import { Router } from 'express';
import v1Router from './v1/index.js';

const apiRouter: Router = Router();

apiRouter.get('/', () => console.log('HIT AT /api'));
apiRouter.use('/v1', v1Router);

export default apiRouter;
