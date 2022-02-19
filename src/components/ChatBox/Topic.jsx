import React from "react";
import classNames from "classnames";

function Topic(props) {
  const topicSelected = { props };
  const topicClass = classNames("px-3 cursor-pointer", {
    "": topicSelected,
    "bg-chat-topic text-chat-topic": !topicSelected,
  });
  return <div className={topicClass}>{props.children}</div>;
}

export default Topic;
