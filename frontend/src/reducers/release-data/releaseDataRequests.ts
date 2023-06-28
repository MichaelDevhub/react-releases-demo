import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios/index";
import {IReleaseData} from "../../types/data.types";
import {CustomError} from "../../types/error.types";
import {isCustomError} from "../../utils/error-checks";

const FETCH_RELEASE_DATA_URL: string = "http://127.0.0.1:5001/react-releases-demo/us-central1/getReactReleases/all";
const SEARCH_RELEASE_DATA_URL: string = "http://127.0.0.1:5001/react-releases-demo/us-central1/getReactReleases/search";

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

export const searchReleaseData = createAsyncThunk<IReleaseData[], string, { rejectValue: CustomError }>('data/searchData', async (searchString: string, {rejectWithValue}) => {
    try {
        const response = await axios.get<IReleaseData[]>(SEARCH_RELEASE_DATA_URL, { params: { key: searchString }});
        return response.data;
    } catch (error) {
        if (isCustomError(error)) {
            return rejectWithValue(error);
        } else {
            return rejectWithValue({message: "Error on data/fetchData"} as CustomError);
        }
    }
});