import { transactionsRepos } from "@/repositories";
import { PaymentParams } from "@/types";

export async function sendMoney(data: PaymentParams) {
    return await transactionsRepos.exchange(data);
}