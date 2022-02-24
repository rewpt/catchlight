import React from "react";
import classNames from "classnames";

function Topic(props) {
  const { topicOnClick, topicSelected, topicid } = props;
  const topicClass = classNames(
    "px-3 cursor-pointer h-[32px] truncate text-navbar",
    {
      "flex justify-center font-bold rounded-full border-2 border-pagetxt text-stone-600 bg-pagetxt":
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
