import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

export default function ChatContent(props) {
  const [socket, setSocket] = useState();
  const [activeFriend, setActiveFriend] = useState(1);
  const { isOpen } = props;
  const [topicSelected, setTopicSelected] = useState(1);

  const topicOnClick = (topicIndex) => {
    setTopicSelected(topicIndex);
  };
  const activeFriendClick = (friendId) => {
    setActiveFriend(friendId);
  };
  
  // set the state of activeFriend to the userId on click, if the activeFriend userId === the friend tab userId.  Pass activeFriend down to friend conversations, and that's the conversation you show

  return (
    <div className="flex w-full">
      <FriendTabGroup
        socket={socket}
        activeFriend={activeFriend}
        activeFriendClick={activeFriendClick}
      />
      <FriendConversations
        socket={socket}
        activeFriend={activeFriend}
        isOpen={isOpen}
        topicOnClick={topicOnClick}
        topicSelected={topicSelected}
      />
    </div>
  );
}
