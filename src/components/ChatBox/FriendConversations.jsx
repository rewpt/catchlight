import classNames from "classnames";
import TopicContainer from "./TopicContainer";
import MessageContainer from "./MessageContainer";
import InputContainer from "./InputContainer";
export default function FriendConversations(props) {
  const { isOpen, topicSelected, topicOnClick, activeFriend, topicRefresh } =
    props;

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
        topicRefresh={topicRefresh}
        activeFriend={activeFriend}
        topicSelected={topicSelected}
        topicOnClick={topicOnClick}
      />
      <MessageContainer
        activeFriend={activeFriend}
        topicSelected={topicSelected}
      />
      <InputContainer
        activeFriend={activeFriend}
        topicSelected={topicSelected}
      />
    </div>
  );
}
