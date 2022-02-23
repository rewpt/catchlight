import React from "react";
import classNames from "classnames";

function Topic(props) {
  const { topicOnClick, topicSelected, topicid } = props;
  const topicClass = classNames(
    "px-3 background-rose-500 cursor-pointer h-[25px] truncate",
    {
      "bg-white font-bold text-rose-500 rounded-full":
        topicSelected === topicid,
      "text-chat-topic": topicSelected !== props.children,
    }
  );
  return (
    <div
      onClick={() => {
        topicOnClick(topicid);
      }}
      className={topicClass}
    >
      {props.children}
    </div>
  );
}

export default Topic;
