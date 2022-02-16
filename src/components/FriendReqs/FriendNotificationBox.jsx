import React from "react";
import Notification from "./Notification";
import axios from "axios";

export default function FriendNotification(props) {
  const { getFriendReqs, incomingFriendReqs } = props;
  return (
    <div>
      <button onClick={getFriendReqs} className=" absolute left-0 btn">
        Get Friend Reqs
      </button>
      <div className="text-lg bg-white drop-shadow-xl border-black border-1 border-solid z-50 overflow-hidden  w-[330px] absolute top-[64px] right-0">
        <div className="odd:bg-white even:bg-black">
          {incomingFriendReqs &&
            incomingFriendReqs.map((friendReq) => {
              return <Notification key={friendReq.id} {...friendReq} />;
            })}
        </div>
        {!incomingFriendReqs && (
          <div className="col-span-12"> No New Notifications </div>
        )}
      </div>
    </div>
  );
}
