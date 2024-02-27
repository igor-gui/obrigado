import { sendMoney } from "@/services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function paymentsProcess(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    try {
      const payment =  await sendMoney(body);
      return res.send(payment);
    } catch (err) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}