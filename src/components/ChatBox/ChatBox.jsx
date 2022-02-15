import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ChatContent from "./ChatContent";
import classNames from "classnames";


export default function ChatBox() {

  const [selected, setSelected] = useState(false)

  function toggleChat() {
    if(selected) {
      return setSelected(false);
    }
    return setSelected(true);
  };

  const toggleWidth = classNames("flex absolute right-0 h-full shadow-md bg-white drop-shadow-md", {"w-1/4": selected, "": !selected});
  const rotateArrow = classNames("w-10 h-10 -left-3 text-black", {"": selected, "rotate-180": !selected});

  return (
    <div className={toggleWidth}>
      <ChatContent />
      <button onClick={()=> toggleChat()} className="flex items-center">
        <FontAwesomeIcon className={rotateArrow} icon={faArrowRight} />
      </button>
    </div>
  );
}
