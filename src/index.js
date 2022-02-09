import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from '@mui/private-theming';
import { CssBaseline } from '@mui/material';
import theme from './theme'



ReactDOM.render(
  <BrowserRouter>
    {/* <ThemeProvider theme={theme}> */}
      <CssBaseline>
        <App />
      </CssBaseline>
    {/* </ThemeProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);

