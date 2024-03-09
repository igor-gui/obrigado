import { prisma } from "@/config";
import { v4 as uuidV4 } from 'uuid'
import { getUserByEmail } from "./users";
import { CreateSessionParams } from "@/types";

export async function createSession({ email }: CreateSessionParams) {
    const { id } = await getUserByEmail(email);

    return await prisma.session.create({
        data: {
            userId: id,
            token: uuidV4()
        }
    });
};

export async function getUserByAuthorization(authorization: string) {
    const { User } = await getSessionByAuthorization(authorization);

    return User;
};

export async function getSessionByAuthorization(authorization: string) {
    const token = authorization.replace("Bearer ", "");

    return await prisma.session.findUnique({
        where: {
            token,
        },
        include: {
            User: true,
        }
    })
}