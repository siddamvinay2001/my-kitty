import { prisma } from "@my-kitty/database/db";

export const getAllUserIdExcept = async(groupId, excludedUserId)=>{
    try{
        const userGroups = await prisma.userGroup.findMany({
            where:{
                groupId,
                userId:{
                    not: excludedUserId
                }
            },
            select:{ 
                userId: true
            }
        })
    }catch(err){
        console.log("Err fetching userIds", err);
    }
}