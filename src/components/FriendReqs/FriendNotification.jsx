import React from "react";
import axios from "axios";

export default function FriendNotification(props) {
  return (
    <div className="text-lg bg-white border-black border-1 border-solid z-50 overflow-hidden  w-[400px] absolute top-[64px] right-0">
      <div className="grid auto-cols-max grid-cols-3">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white z-20  ml-2 mt-3"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <span className="w-full h-full">
          Brett (brett@gmail.com) wants to be your friend
        </span>
        <button className="btn">Add Friend</button>
        <button onClick={props.getFriendReqs} className="btn">
          Get Friend Reqs
        </button>
      </div>
    </div>
  );
}
