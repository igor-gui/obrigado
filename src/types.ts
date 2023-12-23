import { User } from '@prisma/client'

export type PaymentParams = {
    gaverId: number,
    receiverId: number,
    value: number,
}

export type CreateUserParams = Omit<User, 'id' | 'balance'>