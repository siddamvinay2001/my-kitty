import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv'

dotenv.config();
let prisma : PrismaClient | null = null;

export const connectToPostgresql = async()=>{
    if(prisma) return prisma;
    try{
        prisma = new PrismaClient();
        await prisma.$connect();
        console.log("Connected to postgresql");
        return prisma;
    }catch(err){
        console.log("Unable to connect to postgresql",err);
    }
}

process.on('SIGINT', async () => {
    if (prisma) {
        await prisma.$disconnect();
        console.log('Prisma Client disconnected');
    }
    process.exit(0);
});

process.on('SIGTERM', async () => {
    if (prisma) {
        await prisma.$disconnect();
        console.log('Prisma Client disconnected');
    }
    process.exit(0);
});

export {prisma}
