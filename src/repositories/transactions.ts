import { prisma } from "@/config";

export async function exchange({ receiverId, gaverId, value }:
    { receiverId: number, gaverId: number, value: number }) {

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
}

export async function getUserById(id: number) {
    return await prisma.user.findUnique({
        where: { id }
    })
}
