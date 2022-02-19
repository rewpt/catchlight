import Message from "./Message";
import axios from "axios";
import { useState, useEffect, React } from "react";

export default function MessageContainer() {
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const getCurrUserId = async () => {
      try {
        const token = localStorage.getItem("userToken");
        const response = await axios.get(
          "http://localhost:3001/api/users/user/id",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setCurrentUserId(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getCurrUserId();
  }, []);
  const chatMsgsArr = [
    {
      user_id: 1,
      conversation_id: 3,
      content: "Hey",
    },
    {
      user_id: 2,
      conversation_id: 3,
      content: "Hey waddup?",
    },
    {
      user_id: 1,
      conversation_id: 3,
      content: "Nm, u?",
    },
    {
      user_id: 2,
      conversation_id: 3,
      content: "Nm, what a gr8 movie",
    },
    {
      user_id: 2,
      conversation_id: 3,
      content: "Would love to watch it again",
    },
    {
      user_id: 1,
      conversation_id: 3,
      content: "Yeah let's watch it sometime",
    },
  ];
  return (
    <div className="h-full px-3 py-1 flex flex-col justify-end">
      {chatMsgsArr.map((msg, index) => {
        return (
          <Message
            currentUserId={currentUserId}
            key={index}
            messageuserid={msg.user_id}
            conversationid={msg.conversation_id}
          >
            {msg.content}
          </Message>
        );
      })}
    </div>
  );
}
