import React from "react";
import Notification from "./Notification";
import axios from "axios";
import EmptyNotification from "./EmptyNotification";

export default function FriendNotification(props) {
  const { incomingFriendReqs, setIncomingFriendReqs } =
    props;
  return (
    <div>
      <div
        className="text-lg bg-pagebackground drop-shadow-xl border-black border-1 border-solid z-50 
                  overflow-hidden  w-[330px] absolute top-[64px] right-0"
      >
        <div className="odd:bg-pagebackground even:bg-searchmain">
          {incomingFriendReqs &&
            incomingFriendReqs.map((friendReq) => {
              return (
                <Notification
                  key={friendReq.id}
                  incomingFriendReqs={incomingFriendReqs}
                  setIncomingFriendReqs={setIncomingFriendReqs}
                  {...friendReq}
                />
              );
            })}
          {incomingFriendReqs.length === 0 && <EmptyNotification />}
        </div>
      </div>
    </div>
  );
}
