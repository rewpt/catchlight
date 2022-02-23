import FriendTab from "./FriendTab";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FriendTabGroup(props) {
  const [friends, setFriends] = useState({});
  const { activeFriend, activeFriendClick } = props;

  const jwt = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };
  useEffect(() => {
    const getChatFriends = async () => {
      try {
        const response = await axios.get(
          `/api/conversations/participants/friends`,
          jwt
        );
        setFriends(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getChatFriends();
  }, []);

  return (
    <div className="flex-col bg-black w-[90px] h-full no-scrollbar overflow-hidden">
      <div className="w-full h-full overflow-auto">
        {friends.length > 0 &&
          friends.map((friend) => {
            return (
              <FriendTab
                key={friend.id}
                id={friend.id}
                avatarUrl={friend.profile_picture}
                activeFriend={activeFriend}
                activeFriendClick={activeFriendClick}
              />
            );
          })}
      </div>
    </div>
  );
}
