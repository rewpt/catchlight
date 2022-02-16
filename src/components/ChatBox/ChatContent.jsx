import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations"
import { useState } from "react"

export default function ChatContent(props) {
  const [ activeFriend, setActiveFriend ] = useState("")
  const { isOpen } = props

  // set the state of activeFriend to the userId on click, if the activeFriend userId === the friend tab userId.  Pass activeFriend down to friend conversations, and that's the conversation you show

  return (
  <div className="relative flex bg-white w-full">
    <FriendTabGroup activeFriend={activeFriend} onClick={setActiveFriend} />
    <FriendConversations activeFriend={activeFriend} isOpen={isOpen} />
  </div>
  );
}
