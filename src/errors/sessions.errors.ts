import { AplicationError } from "@/types";
import httpStatus from "http-status";

export function invalidCredentials(): AplicationError {
    return {
        name: "Invalid Credentials",
        status: httpStatus.UNAUTHORIZED,
        message: "Invalid email, username or password"
    }
}