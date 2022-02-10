import * as React from 'react';
import FriendAvatarItem from './FriendAvatarItem'


export default function FriendAvatarContainer() {
  return (
    <div className="-space-x-5 overflow-hidden relative ">
      <FriendAvatarItem />
      <FriendAvatarItem />
      <FriendAvatarItem />
    </div>
  );
}
