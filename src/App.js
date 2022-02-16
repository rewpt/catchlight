// import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox'
import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css';


function App() {
  return (
    <React.Fragment>
        <div className="absolute flex content-center h-screen w-screen bg-gray-200 ">
          <div className="relative h-screen max-w-[1000px] mx-auto bg-white drop-shadow-2xl border-t-4 border-rose-500">
            <Nav />
            <SearchBox />
            <Outlet />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
