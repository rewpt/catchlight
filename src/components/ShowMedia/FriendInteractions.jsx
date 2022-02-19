import React from 'react'

export default function FriendInteractions(props) {
  const { friendsAvatarArray } = props;


  return (
    <div className="flex xs:justify-center sm:justify-center lg:justify-start -space-x-3">
    {friendsAvatarArray.map((image, index) => {
        
        return <img
          key={index}
          className="media-avatar"
          src={image.profile_picture}
          alt=""
        />
      })}
  </div>
  );
}