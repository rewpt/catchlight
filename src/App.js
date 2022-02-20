import Nav from './components/Nav';
import SearchBox from './components/SearchBox'
import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css';

function App() {

  return (
    <React.Fragment>
        <div className="absolute flex min-h-[100%] content-center w-screen bg-gray-200 ">
          <div className="relative my-auto rounded-lg pb-4 w-full xs:w-full lg:w-[1050px] xl:w-[1200px] mx-auto bg-white drop-shadow-2xl border-t-4 border-rose-500">
            <Nav />
            <SearchBox />
            <Outlet />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
