import { invalidSession } from "@/errors";
import { getSessionByAuthorization } from "@/repositories";

export async function validateSession(authorization: string) {
    const session = await getSessionByAuthorization(authorization);
    if (!session) throw invalidSession();
    
    return session;
}