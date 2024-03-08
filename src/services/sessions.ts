import { invalidCredentials } from "@/errors";
import { createSession, getUserByEmail } from "@/repositories";
import { CreateSessionParams } from "@/types";
import { compareSync } from "bcrypt";

export async function login(session: CreateSessionParams) {
    await checkPassword(session);
    return await createSession(session);
}

async function checkPassword({ email, password }: CreateSessionParams) {
    const user = await getUserByEmail(email);
    const passwordsMatch = compareSync(password, user.password);

    if(passwordsMatch){
        return
    }
    throw invalidCredentials();
}