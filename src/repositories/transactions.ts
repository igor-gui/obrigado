import { prisma } from "@/config";
import { getUserById } from "./users";
import { CreatePaymentParams } from "@/types";

export async function exchange(payment: CreatePaymentParams) {
    const { receiverId, gaverId, value } = payment;
    withdrawBalance(gaverId, value);
    sendBalance(receiverId, value);
    return await prisma.transaction.create({ data: { gaverId, receiverId, value } })

}

export async function withdrawBalance(id: number, value: number) {
    const user = await getUserById(id);

    return await prisma.user.update({
        where: {
            id
        },
        data: {
            balance: (user.balance - value),
        },
    });
};

export async function sendBalance(id: number, value: number) {
    const receiver = await getUserById(id);

    return await prisma.user.update({
        where: { id },
        data: {
            balance: (receiver.balance + value),
        }
    })
};
