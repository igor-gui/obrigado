import { usersRepo } from "@/repositories";
import { NextFunction, Request, Response } from "express";

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await usersRepo.createUser(req.body);
        return res.send(user)
    } catch (error) {
        console.log(error);
        res.send(error.message)
    }
}