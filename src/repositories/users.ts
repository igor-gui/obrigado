import { prisma } from "@/config";
import { CreateUserParams } from "@/types";

export async function createUser(user: CreateUserParams) {

    return await prisma.user.create({ data: user })
};

