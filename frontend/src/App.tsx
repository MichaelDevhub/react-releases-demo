import React from 'react';
import './App.css';
import LayoutTemplate from "./components/layout-template/LayoutTemplate";
import {ThemeProvider} from "@mui/material";
import theme from "./theme";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <LayoutTemplate >
              <div>some content</div>
          </LayoutTemplate>
      </ThemeProvider>
  );
}

export default App;
