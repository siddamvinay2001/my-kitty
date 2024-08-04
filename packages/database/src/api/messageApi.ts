import { Message, GroupMessage } from "../mongoose/models";

export const saveMessage = async(senderId:string, groupId:string,content:string)=>{
    try{
        const newMessage = new Message({senderId,groupId,content});
        await newMessage.save();

        await GroupMessage.findOneAndUpdate(
            {groupId},
            {$push: {messages: newMessage},lastUpdate: new Date},
            {upsert: true, new: true}
        )
        console.log("Message saved successfully!!");
    }catch(error){
        console.log("Unable to save message",error);
    }
}