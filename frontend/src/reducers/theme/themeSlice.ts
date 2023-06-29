import {createSlice} from '@reduxjs/toolkit';
import {IThemeState} from "../../types/theme.types";


const initialState: IThemeState = {
    mode: 'light',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
