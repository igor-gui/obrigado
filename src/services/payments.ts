import { exchange, getUserByEmail, getUserByNick } from "@/repositories";
import { PaymentParams } from "@/types";
import { validateSession } from "@/middlewares";

export async function sendMoney(payment: PaymentParams) {
    const session = await validateSession(payment.authorization);

    const { id: receiverId } = payment.receiverNick ?
        await getUserByNick(payment.receiverNick) :
        await getUserByEmail(payment.receiverEmail);


    return await exchange({ gaverId: session.User.id, receiverId, value: payment.value });
};