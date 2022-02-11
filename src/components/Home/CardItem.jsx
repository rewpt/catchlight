import React from "react";
import FriendAvatarContainer from "./FriendAvatarContainer";

export default function CardItem({ imageSource }) {
  return (
      <img className="mb-10 box-border min-h-[100px] max-h-[250px] mx-5" src={imageSource} alt="" />
  );
}
