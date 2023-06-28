// store.ts
import {configureStore, ThunkDispatch} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./reducers/reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {Dispatch} from "react";

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<any> & ThunkDispatch<RootState, any, any>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;