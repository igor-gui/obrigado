import { AplicationError } from "@/types";
import httpStatus from "http-status";

export function nickNameInUse(): AplicationError {
    return {
        name: 'Nickname already in Use',
        status: httpStatus.CONFLICT,
        message: "Choose another username."
    }
}

export function emailInUse(): AplicationError {
    return {
        name: 'E-mail already in Use',
        status: httpStatus.CONFLICT,
        message: "Chose another e-mail adress."
    }
}