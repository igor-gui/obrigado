import { sendMoney } from "@/services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function paymentsProcess(req: Request, res: Response, next: NextFunction) {
  const { body, headers } = req;
  const transactionDocument = { ...body, authorization: headers.authorization };
  try {
    const payment = await sendMoney(transactionDocument);
    return res.send(payment);
  } catch (err) {
    const ERROR_DEV_MESSAGE =`ERROR MESSAGE: ${err.message}`;
    console.log(ERROR_DEV_MESSAGE)
    next(err)
  }
}