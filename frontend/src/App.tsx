import React from 'react';
import './App.css';
import LayoutTemplate from "./components/layout-template/LayoutTemplate";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";
import {Provider} from "react-redux";
import store from "./store";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <LayoutTemplate>
                    <div>some content</div>
                </LayoutTemplate>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
