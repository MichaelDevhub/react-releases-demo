import {STATUS} from "./status.types";
import {CustomError} from "./error.types";

export interface IReleaseData {
    tag_name: string;
    name: string;
    html_url: string;
}

export interface IDataState {
    status: STATUS;
    error: CustomError | null;
    data: IReleaseData[];
}

export interface FetchReleaseDataRejectedAction {
    error: string;
}