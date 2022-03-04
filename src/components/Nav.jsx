import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FriendNotificationBox from "./FriendReqs/FriendNotificationBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InviteBox from "./FriendReqs/InviteBox";
import {
  faBell,
  faUserPlus,
  faBars,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu/UserMenu";

export default function Nav(props) {
  const [incomingFriendReqs, setIncomingFriendReqs] = useState([]);
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const [showFriendRequestBox, setShowFriendRequestBox] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [bellClicked, setBellClicked] = useState(false);
  const { friendRefresh, setFriendRefresh } = props;

  const toggleIcons = (clickedIcon) => {
    if (clickedIcon === "userProfile") {
      setShowFriendRequestBox(false);
      setShowNotificationBox(false);
      setShowProfile(true);
    } else if (clickedIcon === "friendRequestBox") {
      setShowFriendRequestBox(!showFriendRequestBox);
      setShowNotificationBox(false);
      setShowProfile(false);
    } else if (clickedIcon === "NotificationBox") {
      setShowFriendRequestBox(false);
      setShowNotificationBox(!showNotificationBox);
      setShowProfile(false);
      setHasNewNotification(false);
    }
  };

  useEffect(() => {
    const getFriendReqs = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get("/api/friends/requests", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIncomingFriendReqs([...response.data]);
      } catch (err) {
        console.log(err);
      }
    };
    const reqInterval = setInterval(() => {
      getFriendReqs();
    }, 2000);

    return () => {
      clearInterval(reqInterval);
    };
  });
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
    <div className="shadow-md w-full sticky top-0 left-0 z-20  ">
      <div className="md:flex items-center justify-between navbg py-4 md:px-10 px-7 rounded-t-lg">
        <Link to="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
            <FontAwesomeIcon className="text-logo mr-1" icon={faEye} />
            <span className="text-logotxt">Catchlight</span>
          </div>
        </Link>
        <div onClick={() => setOpen(!open)} className={hamburger}>
          <FontAwesomeIcon name={open ? "close" : "menu"} icon={faBars} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute 
        md:static navgbg md:z-auto z-[-1] left-0 w-full md:w-auto
        md:pl-0 pl-9 transition-all duration-400 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } md:opacity-100 opacity-100`}
        >
          <li>
            <FontAwesomeIcon
              className={navItemR}
              icon={faBell}
              onClick={() => {
                toggleIcons("NotificationBox");
                setBellClicked(!bellClicked);
              }}
            />
            {incomingFriendReqs.length > 0 && !bellClicked && (
              <div className="absolute rounded full top-[20px] right-[160px] z-50 w-[10px] h-[10px] bg-notificationcolor"></div>
            )}
            {showNotificationBox && (
              <FriendNotificationBox
                friendRefresh={friendRefresh}
                setFriendRefresh={setFriendRefresh}
                hasNewNotification={hasNewNotification}
                incomingFriendReqs={incomingFriendReqs}
                setIncomingFriendReqs={setIncomingFriendReqs}
              />
            )}
          </li>
          <li>
            <FontAwesomeIcon
              className={navItemR}
              icon={faUserPlus}
              onClick={() => {
                toggleIcons("friendRequestBox");
              }}
            />
            {showFriendRequestBox && <InviteBox />}
          </li>
          <li>
            <UserMenu
              onClick={() => {
                toggleIcons("userProfile");
              }}
              user={user}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
