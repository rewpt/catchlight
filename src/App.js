// import './App.css';
import Home from './components/Home/Home'
import Nav from './components/Nav';
import ShowMedia from './components/ShowMedia/ShowMedia'
import Banner from './components/Banner'
import Welcome from './components/Welcome/Welcome'
import Main from './components/Main'
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './index.css';


function App() {
  return (
    <React.Fragment>
      <Nav />
          <Banner />
          <Main />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/" element={<Home />} />
            <Route path="/showmedia" element={<ShowMedia />} />
          </Routes>
    </React.Fragment>
  );
}

export default App;
