import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUserPlus,
  faBars,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";

export default function Nav() {
  const navItemR =
    "md:my-0 my-7 md:ml-8 cursor-pointer text-2xl hover:text-gray-400 duration-300";
  const hamburger =
    "text-2xl absolute text-black right-8 top-4 z-20 cursor-pointer md:hidden";
  let [open, setOpen] = React.useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
    profile_picture: null,
  });

  useEffect(() => {
    async function getUser() {
      try {
        const axiosUser = await axios.get("/api/users/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        return setUser(axiosUser.data);
        
      } catch (err) {
        console.log(err);
      }
    }

    return getUser();
  }, []);

  return (
    <div className="shadow-md w-full sticky top-0 left-0 z-20">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <FontAwesomeIcon className="text-logo" icon={faEye} />
          <Link to="/">Catchlight</Link>
        </div>
        <div onClick={() => setOpen(!open)} className={hamburger}>
          <FontAwesomeIcon name={open ? "close" : "menu"} icon={faBars} />
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
          </li>
          <li>
            <FontAwesomeIcon className={navItemR} icon={faUserPlus} />
          </li>
          <li>
            <UserMenu user={user} />
          </li>
        </ul>
      </div>
    </div>
  );
}
