import { AplicationError } from "@/types";
import httpStatus from "http-status";

const { UNAUTHORIZED } = httpStatus;

export function invalidCredentials(): AplicationError {
    return {
        name: "Invalid Credentials",
        status: UNAUTHORIZED,
        message: "Invalid email, username or password"
    }
};

export function invalidSession(): AplicationError {
    return {
        name: "Invalid Session",
        status: UNAUTHORIZED,
        message: "You must sign-in or create an account."
    }
}