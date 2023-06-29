import releaseDataSlice from "./releaseDataSlice";
import {IDataState, IReleaseData} from "../../types/data.types";
import {STATUS} from "../../types/status.types";
import {fetchReleaseData} from "./releaseDataRequests";
import {CustomError} from "../../types/error.types";

describe('releaseDataSlice', () => {
    it('updates state correctly on fetchReleaseData.pending', () => {
        const initialState: IDataState = {
            status: STATUS.IDLE,
            error: null,
            data: [] as IReleaseData[],
        };

        const action = fetchReleaseData.pending('', undefined);
        const nextState = releaseDataSlice(initialState, action);

        expect(nextState).toEqual({
            status: STATUS.LOADING,
            error: null,
            data: [],
        });
    });

    it('updates state correctly on fetchReleaseData.fulfilled', () => {
        const initialState: IDataState = {
            status: STATUS.LOADING,
            error: null,
            data: [],
        };

        const payload: IReleaseData[] = [/* Mocked release data */];

        const action = fetchReleaseData.fulfilled(payload, '', undefined, null);
        const nextState = releaseDataSlice(initialState, action);

        expect(nextState).toEqual({
            status: STATUS.SUCCESS,
            error: null,
            data: payload,
        });
    });

    it('updates state correctly on fetchReleaseData.rejected', () => {
        const initialState: IDataState = {
            status: STATUS.LOADING,
            error: null,
            data: [],
        };

        const error: CustomError = {
            message: 'Something went wrong',
        };

        const action = fetchReleaseData.rejected(null, '', undefined, error);
        const nextState = releaseDataSlice(initialState, action);

        expect(nextState).toEqual({
            status: STATUS.FAILED,
            error,
            data: [],
        });
    });
});