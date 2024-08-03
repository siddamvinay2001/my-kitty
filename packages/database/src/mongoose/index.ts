import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectToMongoose = async()=>{
    try{
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDb")
    }
    catch(err){
        console.log("Cannot connect to mongoDb", err);
    }
}

connectToMongoose();

process.on('SIGINT', async () => {
    await mongoose.disconnect();
    console.log('Mongoose disconnected');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await mongoose.disconnect();
    console.log('Mongoose disconnected');
    process.exit(0);
});