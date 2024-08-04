import {prisma} from '../postgresql';

export const createNewGroup = async(userId:string, groupName:string, groupDescription:string)=>{
    try{
        const newGroup = await prisma.group.create({
            data: {
                name: groupName,
                description: groupDescription
            }
        });
        const newUserGroup = await prisma.userGroup.create({
            data:{
                role: 'super-kitty',
                group: {
                    connect: {
                        id: newGroup.id
                    }
                },
                user: {
                    connect:{
                        id: userId
                    }
                }
            }
        });
        return newGroup;
    }catch(error){
        console.log("Error in creating group", error);
    }
}

export const verifyIfUserPresentInGroup = async(userId:string, groupId:string)=>{
    try{
        const findUserGroup = await prisma.userGroup.findUnique({
            where:{
                userId_groupId:{
                    userId,
                    groupId
                }
            }
        });
        return findUserGroup;
    }catch(err){
        console.log("Error while searching user in group");
    }
}

export const addUserToGroup = async (userIdToAdd:string, groupIdToAdd:string)=>{
    try{
        const userToGroup = await prisma.userGroup.create({
            data:{
                role: "kitty",
                user: {
                    connect:{
                        id: userIdToAdd
                    }
                },
                group:{
                    connect:{
                        id: groupIdToAdd
                    }
                }
            }
        });
        return userToGroup;
    }catch(err){
        console.log("failed adding user to group");
    }
} 

