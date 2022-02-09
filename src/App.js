// import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import ShowMedia from './components/ShowMedia/ShowMedia'
import Banner from './components/Banner'
import { CssBaseline } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import theme from './theme'
import { ThemeProvider } from '@mui/private-theming';

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Nav />
            <Banner />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/showmedia" element={<ShowMedia />} />
            </Routes>
          </div>
        </ThemeProvider>
      </CssBaseline>
    </React.Fragment>
  );
}

export default App;
