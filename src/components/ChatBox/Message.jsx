import React from "react";

export default function Message(props) {
  return (
    <div className="odd:text-sender even:text-rose-400">{props.children}</div>
  );
}
