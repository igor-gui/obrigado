import { AplicationError } from "@/types";
import httpStatus from "http-status";

export function DoubleData(): AplicationError {
    return {
        status: httpStatus.UNPROCESSABLE_ENTITY,
        message: "Only receiver email or nick, not both",
        name: "Double data"
    }
}