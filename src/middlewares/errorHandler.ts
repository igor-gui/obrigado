import { AplicationError } from "@/types";
import { NextFunction, Request, Response } from "express";

export function errorHandler(error: AplicationError, _req: Request, res: Response, _next: NextFunction) {
    const { status, message, name } = error;

    return res.status(status).send({
        name,
        message
    })
}