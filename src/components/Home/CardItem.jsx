import React from 'react';
import FriendAvatarContainer from './FriendAvatarContainer'


export default function CardItem({imageSource}) {
  return (
    <div className="mb-10 mx-5">
      <img
        src={imageSource}
        alt=""
      />
      <div>
        <FriendAvatarContainer />
      </div>
    </div>
  )
}