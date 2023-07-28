import prisma from "../database";
import { UserObjectHash } from "../interfaces/interfaces";

export async function emailCheck(email: string) {
    const emailCheck = await prisma.user.findMany({
        where: { email }
    })

    if(emailCheck.length !== 0) return null;
    
    return emailCheck;
}

export async function insertUserData(params: UserObjectHash) {
    const { name, email, hashPassword } = params;
    
    const password = hashPassword;

    const user = {
        name, email, password
    }
    
    await prisma.user.create({
        data: user
    })
}

export async function findUser(email: string) {
    const user = prisma.user.findFirst({
        where: {
            email
        }
    })
    return user;
}