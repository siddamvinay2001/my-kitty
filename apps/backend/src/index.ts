import express, { Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import apiRouter from './api/index.js';

dotenv.config();
const app: Application = express();
const PORT: number | string = process.env.PORT || 3003;

app.use(bodyParser.json());
app.use('/api', apiRouter);

app.use((_error: any,_req: any,res: any,_next: any)=>{
  res.json({
    msg:"some error"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
