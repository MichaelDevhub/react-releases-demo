import {IDataState} from "../types/data.types";
import {STATUS} from "../types/status.types";

export const testDataReleases: IDataState = {
    status: STATUS.SUCCESS,
    error: null,
    data: [
        {
            tag_name: 'v1.0.0',
            name: 'Release 1.0.0',
            html_url: 'https://github.com/user/repo/releases/v1.0.0',
            reactions: {
                "+1": 10,
                "-1": 2,
            },
        },
        {
            tag_name: 'v1.1.0',
            name: 'Release 1.1.0',
            html_url: 'https://github.com/user/repo/releases/v1.1.0',
            reactions: {
                "+1": 5,
                "-1": 0,
            },
        },
    ],
};