import { prisma } from "@/config";
import { CreateUserParams } from "@/types";

export async function createUser(user: CreateUserParams) {
    return await prisma.user.create({
        data: user
    })
}

export async function getUserByEmail(email: string){
    return await prisma.user.findFirst({
        where: {
            email
        }
    });
}

export async function getUserByNick(nickName: string){
    return await prisma.user.findFirst({
        where: {
            nickName
        }
    })
}