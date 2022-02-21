import Nav from './components/Nav';
import SearchBox from './components/SearchBox'
import { Outlet } from "react-router-dom";
import React from 'react';
import './index.css';

function App() {

  return (
    <React.Fragment>
        <div className="flex min-h-[100%] content-center w-screen bg-pagebackground ">
          <div className="mt-2 mb-4 relative my-auto rounded-lg pb-4 w-full xs:w-full lg:w-[1050px] xl:w-[1200px] mx-auto bg-searchmain drop-shadow-2xl border-t-4 border-topborder">
            <Nav />
            <Outlet />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
