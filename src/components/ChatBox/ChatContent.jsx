import FriendTabGroup from "./FriendTabGroup";
import FriendConversations from "./FriendConversations"
import { useState } from "react"

export default function ChatContent() {

  const [ activeTab, setActiveTab ] = useState()


  return (
  <div className="relative bg-white w-full">
    <FriendTabGroup activeTab={activeTab} onClick={setActiveTab}/>
    <FriendConversations />
  </div>
  );
}
