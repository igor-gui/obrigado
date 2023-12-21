import { exchange } from "@/repositories";
import { PaymentParams } from "@/types";

export async function sendMoney(data: PaymentParams){
    return await exchange(data);
}