import {CustomError} from "../types/error.types";

export function isCustomError(error: any): error is CustomError {
    return Object.prototype.hasOwnProperty.call(error, 'message');
}
