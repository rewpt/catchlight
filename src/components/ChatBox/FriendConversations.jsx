import classNames from "classnames";
import TopicContainer from "./TopicContainer";
import MessageContainer from "./MessageContainer";
import InputContainer from "./InputContainer";
export default function FriendConversations(props) {
  const { isOpen, topicSelected, topicOnClick, socket, activeFriend } = props;

  const hide = classNames(
    "flex flex-col justify-between bg-searchmain w-full rounded-lg border-2 border-black text-2xl break-all",
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
