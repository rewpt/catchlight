import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations"
import { useState } from "react"

export default function ChatContent(props) {
  const [ activeTab, setActiveTab ] = useState()
  const { selected } = props

  return (
  <div className="relative flex bg-white w-full">
    <FriendTabGroup activeTab={activeTab} onClick={setActiveTab} />
    <FriendConversations selected={selected} />
  </div>
  );
}
