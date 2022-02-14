import Nav from './components/Nav';
import SearchBox from './components/SearchBox'
import { Outlet} from "react-router-dom";
import React, {useState} from 'react';
import './index.css';
import InviteBox from './components/FriendReqs/InviteBox';

function App() {
  const [showFriendRequestBox, setShowFriendRequestBox] = useState(true);
  return (
    <React.Fragment>
        <div className="absolute flex content-center h-screen w-screen bg-white ">
          <div className="relative h-screen max-w-[1000px] mx-auto bg-white drop-shadow-2xl border-t-4 border-rose-500">
            {showFriendRequestBox && <InviteBox />}
            <Nav />        
            <SearchBox />
            <Outlet />
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
