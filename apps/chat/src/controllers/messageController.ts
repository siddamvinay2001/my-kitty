
import {saveMessage} from '@my-kitty/database/messages'
import { getConnectedClients } from './wsInitController';
import { getAllUsersInGroup } from '@my-kitty/database/user';

export const sendLiveMessages = async(req,res)=>{
    try{
        const {userId} = req;
        const {messaage, groupId} = req.body;
        await saveMessage(userId,groupId,messaage);
        const condition = {userId: { not: userId}};
        const allUsersInGroup = await getAllUsersInGroup(groupId,condition);
        const onlineUsers:any = getConnectedClients();

        for(const user of allUsersInGroup){
            const clientWs = onlineUsers.get(user.userId);
            if(clientWs){
                clientWs.send(JSON.stringify({type:"new-message", messaage}));
            }
        }

        return res.status(200).json({
            messaage: "Message successfully sent"
        })

    }catch(err){
        return res.status(500).json({
            messaage:"Unable to send message",
            err
        })
    }
}