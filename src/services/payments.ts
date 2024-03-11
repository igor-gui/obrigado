import { exchange, getUserByEmail, getUserByNick } from "@/repositories";
import { PaymentParams } from "@/types";
import { validateSession } from "@/middlewares";
import { DoubleData } from "@/errors";
import { checkValidData } from "@/helpers";

export async function sendMoney(payment: PaymentParams) {
    const session = await validateSession(payment.authorization);

    checkDoubleData(payment);

    const { id: receiverId } = checkValidData(payment.receiverNick) ?
        await getUserByNick(payment.receiverNick) :
        await getUserByEmail(payment.receiverEmail);


    return await exchange({ gaverId: session.User.id, receiverId, value: payment.value });
};

function checkDoubleData(payment: PaymentParams) {
    const { receiverEmail, receiverNick } = payment;

    const emailIsValid = checkValidData(receiverEmail);
    const nickIsValid = checkValidData(receiverNick);

    if (emailIsValid && nickIsValid) throw DoubleData()
};


