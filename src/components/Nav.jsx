import * as React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserPlus,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import FriendNotification from "./FriendReqs/FriendNotification";
import InviteBox from "./FriendReqs/InviteBox";
import axios from "axios";

export default function Nav() {
  const [showFriendRequestBox, setShowFriendRequestBox] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(true);
  const [hasFriendRequest, setHasFriendRequest] = useState(true);

  const getFriendReqs = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      const response = await axios.get(
        "http://localhost:3001/api/friends/requests",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navItemR =
    "md:my-0 my-7 md:ml-8 cursor-pointer text-2xl hover:text-gray-400 duration-300";
  const hamburger = "text-2xl absolute right-8 top-6 cursor-pointer md:hidden";
  let [open, setOpen] = React.useState(false);

  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          Catchlight
        </div>
        {/* <Link to="/showmedia">Temp Showmedia Link</Link>
        <Link to="/welcome">Temp Welcome Link</Link>
        <Link to="/">Temp Home Link</Link> */}
        <div onClick={() => setOpen(!open)} className="">
          <FontAwesomeIcon
            name={open ? "close" : "menu"}
            className={hamburger}
            icon={faBars}
          />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute 
        md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
        md:pl-0 pl-9 transition-all duration-400 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } md:opacity-100 opacity-80`}
        >
          <li>
            <FontAwesomeIcon className={navItemR} icon={faBell} />
            {hasFriendRequest && (
              <div className="absolute rounded full top-[20px] right-[160px] z-50 w-[10px] h-[10px] bg-rose-400"></div>
            )}
            {showNotificationBox && (
              <FriendNotification getFriendReqs={getFriendReqs} />
            )}
          </li>

          <li>
            <FontAwesomeIcon className={navItemR} icon={faUserPlus} />
            {showFriendRequestBox && <InviteBox />}
          </li>
          <li>
            <FontAwesomeIcon className={navItemR} icon={faCircleUser} />
          </li>
        </ul>
      </div>
    </div>
  );
}
