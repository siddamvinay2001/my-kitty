import { prisma } from '../postgresql/index';

type UserFields = 'id' | 'username' | 'name' | 'email' | 'phoneNumber' | 'password' | 'createdAt' | 'updatedAt';

export const findUserWithUsername = async (usernameToFind: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                username: usernameToFind
            }
        });
        return user || null;
    } catch (err) {
        console.error("Error in finding user:", err);
        throw err;  // Re-throw error after logging
    }
}

export const createNewUser = async (name: string, email: string | null, phoneNumber: string | null, username: string, password: string) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                phoneNumber,
                username,
                password
            }
        });

        return newUser;
    } catch (err) {
        console.error("Error in creating new user:", err);
        throw err;  // Re-throw error after logging
    }
}

export const getUser = async (username: string, fields: UserFields[]) => {
    try {
        // Construct selectFields object
        const selectFields: Record<string, boolean> = fields.reduce((acc, field) => {
            acc[field] = true;
            return acc;
        }, {} as Record<string, boolean>);

        const user = await prisma.user.findUnique({
            where: { username },
            select: selectFields
        });

        return user;
    } catch (err) {
        console.error("Error in fetching user and credentials:", err);
        throw err;  // Re-throw error after logging
    }
}
