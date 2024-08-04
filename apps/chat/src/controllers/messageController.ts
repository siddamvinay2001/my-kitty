
import {saveMessage} from '@my-kitty/database/messages'
import { getConnectedClients } from './wsInitController';
import { getAllUsersInGroup } from '@my-kitty/database/user';

export const sendLiveMessages = async(req,res)=>{
    try{
        const {userId} = req;
        const {message, groupId} = req.body;
        console.log(`Message ${message} , groupI${groupId}`);
        await saveMessage(userId,groupId,message);
        const condition = {userId: { not: userId}};
        const allUsersInGroup = await getAllUsersInGroup(groupId,condition);
        const onlineUsers:any = getConnectedClients();

        for(const user of allUsersInGroup){
            const clientWs = onlineUsers.get(user.userId);
            if(clientWs){
                clientWs.send(JSON.stringify({type:"new-message", message}));
            }
        }

        return res.status(200).json({
            message: "Message successfully sent"
        })

    }catch(err){
        return res.status(500).json({
            message:"Unable to send message",
            err
        })
    }
}