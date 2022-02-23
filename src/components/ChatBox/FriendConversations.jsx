import classNames from "classnames";
import TopicContainer from "./TopicContainer";
import MessageContainer from "./MessageContainer";
import InputContainer from "./InputContainer";
import { useState } from "react";
export default function FriendConversations(props) {
  const { isOpen, topicSelected, topicOnClick, socket, activeFriend } = props;

  const hide = classNames(
    "flex flex-col justify-between bg-gradient-to-r  from-chatbg1 via-chatbg2 to-chatbg3 w-full",
    {
      "": isOpen,
      hidden: !isOpen,
    }
  );

  return (
    <div className={hide}>
      <TopicContainer
        activeFriend={activeFriend}
        topicSelected={topicSelected}
        topicOnClick={topicOnClick}
      />
      <MessageContainer
        activeFriend={activeFriend}
        topicSelected={topicSelected}
      />
      <InputContainer 
        socket={socket} 
        activeFriend={activeFriend}
        topicSelected={topicSelected}
      />
    </div>
  );
}
