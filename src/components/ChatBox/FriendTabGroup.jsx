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
    const reqInterval = setInterval(() => {
      getChatFriends();
    }, 1000);

    return () => {
      clearInterval(reqInterval);
    };
  }, []);

  return (
    <div className="flex-col bg-pagebackground w-[90px] h-full no-scrollbar overflow-hidden border-black rounded-lg mx-1 border-2 border-black">
      <div className="w-full h-full overflow-auto ">
        {friends.length > 0 &&
          friends.map((friend) => {
            return (
              <FriendTab
                key={friend.id}
                id={friend.id}
                friendName={friend.name}
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
