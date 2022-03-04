import React from "react";
import Notification from "./Notification";
import EmptyNotification from "./EmptyNotification";

export default function FriendNotification(props) {
  const { incomingFriendReqs, setIncomingFriendReqs, toggleFriendRefresh } =
    props;
  return (
    <div>
      <div
        className="text-lg bg-pagebackground drop-shadow-xl border-black border-1 border-solid z-50 
                  overflow-hidden  w-[380px] absolute top-[64px] right-0"
      >
        <div className="odd:bg-pagebackground even:bg-searchmain">
          {incomingFriendReqs &&
            incomingFriendReqs.map((friendReq) => {
              return (
                <Notification
                  key={friendReq.id}
                  toggleFriendRefresh={toggleFriendRefresh}
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
