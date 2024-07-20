import express, {
  Application,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apiRouter from './api';

dotenv.config();
const app: Application = express();
const PORT: number | string = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use((error: ErrorRequestHandler, req: Request, res: Response) => {
  return res.status(500).json({
    msg: 'Bad request',
    error,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
