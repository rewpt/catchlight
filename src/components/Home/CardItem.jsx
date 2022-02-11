import React from "react";
import FriendAvatarContainer from "./FriendAvatarContainer";

export default function CardItem({ imageSource }) {
  return (
    <div className="mb-10 box-border max-h-[150px] mx-5">
      <img src={imageSource} alt="" />
      {/* <div>

      </div> */}
      {/* <div>
        <FriendAvatarContainer />
      </div> */}
    </div>
  );
}
