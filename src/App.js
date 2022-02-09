// import './App.css';
import Home from './components/Home'
import Nav from './components/Nav';
import ShowMedia from './components/ShowMedia/ShowMedia'
import Banner from './components/Banner'
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import './index.css';

const styles = "text-red-700 text-xl font-bold underline " 

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
        <h1 className={styles}>
          Hello world!
        </h1>
      </div>
    </React.Fragment>
  );
}

export default App;
