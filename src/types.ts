export type CreatePaymentParams = {
    
    gaverId: number,
    receiverId: number,
    value: number,
}

export type PaymentParams = {
    receiverNick: string,
    receiverEmail: string,
    authorization: string,
    value: number
}

export type CreateUserParams = {
    nickName: string,
    email: string,
    password: string
}

export type AplicationError = {
    name: string,
    message: string,
    status: number
}

export type CreateSessionParams = {
    email: string,
    password: string
}