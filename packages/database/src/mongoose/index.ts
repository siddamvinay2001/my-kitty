import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

export const connectToMongoose = async(url)=>{
    try{
        await mongoose.connect(url || process.env.MONGO_URI);
        console.log("Connected to MongoDb")
    }
    catch(err){
        console.log("Cannot connect to mongoDb", err);
    }
}

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