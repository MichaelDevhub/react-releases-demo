import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Provider} from "react-redux";
import store from "./store";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <HomePage/>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
