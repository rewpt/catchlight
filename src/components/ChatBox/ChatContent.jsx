import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations";
import { useState } from "react";

export default function ChatContent(props) {
  const [activeFriend, setActiveFriend] = useState("");
  const { isOpen } = props;
  const [topicSelected, setTopicSelected] = useState(0);
  const topicOnClick = (topicIndex) => {
    setTopicSelected(topicIndex);
  };
  const activeFriendClick = (friendId) => {
    setActiveFriend(friendId);
  };
  // set the state of activeFriend to the userId on click, if the activeFriend userId === the friend tab userId.  Pass activeFriend down to friend conversations, and that's the conversation you show

  return (
    <div className="flex bg-black w-full">
      <FriendTabGroup
        activeFriend={activeFriend}
        activeFriendClick={activeFriendClick}
      />
      <FriendConversations
        activeFriend={activeFriend}
        isOpen={isOpen}
        topicOnClick={topicOnClick}
        topicSelected={topicSelected}
      />
    </div>
  );
}
