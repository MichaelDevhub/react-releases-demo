import {STATUS} from "./status.types";
import {CustomError} from "./error.types";
import {IReactions} from "./reaction.types";

export interface IReleaseData {
    tag_name: string;
    name: string;
    html_url: string;
    reactions: IReactions;
}

export interface IDataState {
    status: STATUS;
    error: CustomError | null;
    data: IReleaseData[];
}

export interface FetchReleaseDataRejectedAction {
    error: string;
}