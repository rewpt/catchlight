import { React } from "react";
import classNames from "classnames";

export default function Message(props) {
  const { messageuserid, conversationid, currentUserId } = props;

  const messageClass = classNames("", {
    "text-sender": messageuserid === currentUserId,
    "text-rose-400": messageuserid !== currentUserId,
  });

  return (
    <div
      userid={messageuserid}
      conversationid={conversationid}
      className={messageClass}
    >
      {props.children}
    </div>
  );
}
