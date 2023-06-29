import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IDataState, IReleaseData} from "../../types/data.types";
import {STATUS} from "../../types/status.types";
import {fetchReleaseData, searchReleaseData} from "./releaseDataRequests";
import {CustomError} from "../../types/error.types";


const initialState: IDataState = {
    status: STATUS.IDLE,
    error: null,
    data: [] as IReleaseData[],
}

const releaseDataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReleaseData.pending, (state: IDataState) => {
            state.status = STATUS.LOADING;
            state.error = null;
        });
        builder.addCase(fetchReleaseData.fulfilled, (state: IDataState, action: PayloadAction<IReleaseData[]>) => {
            state.status = STATUS.SUCCESS;
            state.error = null;
            state.data = action.payload;
        });
        builder.addCase(fetchReleaseData.rejected, (state: IDataState, action: PayloadAction<CustomError | undefined>) => {
            state.status = STATUS.FAILED;
            state.error = action.payload ? action.payload : { message: "Error on data/fetchData" };
            state.data = [];
        });
        builder.addCase(searchReleaseData.pending, (state: IDataState) => {
            state.status = STATUS.LOADING;
            state.error = null;
        });
        builder.addCase(searchReleaseData.fulfilled, (state: IDataState, action: PayloadAction<IReleaseData[]>) => {
            state.status = STATUS.SUCCESS;
            state.error = null;
            state.data = action.payload;
        });
        builder.addCase(searchReleaseData.rejected, (state: IDataState, action: PayloadAction<CustomError | undefined>) => {
            state.status = STATUS.FAILED;
            state.error = action.payload ? action.payload : { message: "Error on data/fetchData" };
            state.data = [];
        });
    },
});

export default releaseDataSlice.reducer;
