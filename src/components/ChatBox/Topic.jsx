import React from "react";
import classNames from "classnames";

function Topic(props) {
  const { topicOnClick, topicSelected } = props;
  const topicClass = classNames(
    "px-3 background-rose-500 cursor-pointer h-[25px] truncate",
    {
      "bg-white font-bold text-rose-500 rounded-full":
        topicSelected === props.children,
      "text-chat-topic": topicSelected !== props.children,
    }
  );
  return (
    <div
      onClick={() => {
        topicOnClick(props.children);
        console.log("TOPIC SELECTED CHECKOUT", topicSelected);
      }}
      className={topicClass}
    >
      {props.children}
    </div>
  );
}

export default Topic;
