import { createUser, getAllUsers, getUserByEmail, getUserByNick } from "@/repositories";
import { CreateUserParams } from "@/types";
import * as bcrypt from "bcrypt";
import { emailInUse, nickNameInUse } from "@/errors";

export async function newUser(user: CreateUserParams) {

    const userExists = await checkUser(user);
    if (userExists) return userExists;

    const password = await encryptPassword(user.password);
    return await createUser({ ...user, password });
};

async function checkUser(user: CreateUserParams) {

    const emailAlreadyexists = await getUserByEmail(user.email);
    const nickNameAlreadyExists = await getUserByNick(user.nickName);

    if (emailAlreadyexists) throw emailInUse();
    if (nickNameAlreadyExists) throw nickNameInUse();

    return false;
};

async function encryptPassword(pass: string) {

    return bcrypt.hashSync(pass, 10);
};

export async function getUsersData(){
    return await getAllUsers();
}