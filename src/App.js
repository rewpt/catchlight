// import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox'
import { Outlet} from "react-router-dom";
import React from 'react';
import './index.css';


function App() {
  return (
    <React.Fragment>
        <div className="flex h-screen bg-margin-pattern bg-slate-500 bg-scroll z-0">
          <div className="container h-full mx-auto z-15 bg-white drop-shadow-2xl border-t-4 rounded-2xl border-rose-500">
            <Nav />
            <SearchBox />
            <Outlet />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
