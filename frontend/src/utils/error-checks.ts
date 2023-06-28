import {CustomError} from "../types/error.types";

export function isCustomError(error: any): error is CustomError {
    return error.hasOwnProperty("message");
}