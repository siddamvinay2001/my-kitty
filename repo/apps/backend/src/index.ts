import express from 'express';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express();

async function insertUser(name:string, password: string) {
  const res = await prisma.user.create({data: {name, password}, select:{id:true,tokens:true}});
  console.log(res);
}

insertUser("kitty","WeLoveKitty")

// app.get('/', (req, res) => {
//   res.json('Backend');
// });
// app.listen(3003, () => {
//   console.log('Backend is up at 3003');
// });
