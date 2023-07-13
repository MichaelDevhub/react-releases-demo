import {createAsyncThunk} from "@reduxjs/toolkit";
import {IReleaseData} from "../../types/data.types";
import {CustomError} from "../../types/error.types";
import {isCustomError} from "../../utils/error-checks";
import axios from "axios";

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "http://127.0.0.1:5001/react-releases-demo/us-central1" : "https://us-central1-react-releases-demo.cloudfunctions.net";
axios.defaults.timeout = 5000;

export const FETCH_RELEASE_DATA_URL = "/getReactReleases/all";
export const SEARCH_RELEASE_DATA_URL = "/getReactReleases/search";

export const fetchReleaseData = createAsyncThunk<IReleaseData[], void, { rejectValue: CustomError }>('data/fetchData', async (_, {rejectWithValue}) => {
    try {
        const response = await axios.get<IReleaseData[]>(FETCH_RELEASE_DATA_URL);
        return response.data;
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error);
        } else {
            return rejectWithValue({message: "Error on data/fetchData"} as CustomError);
        }
    }
});

export const searchReleaseData = createAsyncThunk<IReleaseData[], string, { rejectValue: CustomError }>('data/searchData', async (arg: string, {rejectWithValue}) => {
    try {
        const response = await axios.get<IReleaseData[]>(SEARCH_RELEASE_DATA_URL, { params: { key: arg }});
        return response.data;
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error);
        } else {
            return rejectWithValue({message: "Error on data/fetchData"} as CustomError);
        }
    }
});