import { getUsersData, newUser } from "@/services";
import { CreateUserParams } from "@/types";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function createNewUser(req: Request, res: Response, next: NextFunction) {
    const { body }: { body: CreateUserParams } = req;
    try {
        const user = await newUser(body);
        return res.send(user).status(httpStatus.CREATED);
    }
    catch (err) {
        console.error(err)
        const ERROR_DEV_MESSAGE: string = `ERROR MESSAGE: ${err.message}`;
        console.log(ERROR_DEV_MESSAGE);
        next(err)
    }
}

export async function getUsers(_req: Request, res: Response){
    try {
        const users = await getUsersData()
        console.log(users)
        return res.send(users)
    } catch (error) {
        res.send(error.message)
    }
}