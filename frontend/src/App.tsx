import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./store";
import HomePage from "./pages/home/HomePage";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider>
                <HomePage/>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
