// import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import ShowMedia from './components/ShowMedia/ShowMedia'
import Banner from './components/Banner'
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Nav />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showmedia" element={<ShowMedia />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
