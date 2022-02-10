import React from 'react';
import FriendAvatarContainer from './FriendAvatarContainer';


export default function CardItem({imageSource}) {
  return (
    <div className="flex mx-5 mb-5">
      <FriendAvatarContainer />
      <div className="grid-col rounded-xl">
        <img src={imageSource} alt="movie name" className="grayscale drop-shadow-xl" />
      </div>
    </div>
  )
}