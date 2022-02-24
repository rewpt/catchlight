import Message from "./Message";
import axios from "axios";
import { useState, useEffect, React } from "react";

export default function MessageContainer(props) {

  const [currentUserId, setCurrentUserId] = useState("");
  const [messages, setMessages] = useState([]);
  const { activeFriend, topicSelected } = props;
  const jwt = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };

  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.post(
          `/api/conversations/messages`,
          { activeFriend: activeFriend, topicSelected: topicSelected },
          jwt
        );
        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();


    const reqInterval = setInterval(() => {
      getMessages();
    }, 1000);

    return () => {
      clearInterval(reqInterval);
    };
  }, [activeFriend, topicSelected]);


  useEffect(() => {
    const getUserId = async () => {
      try {
        const response = await axios.get(`/api/users/user/id`, jwt);
        setCurrentUserId(response.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getUserId();
  }, []);

  return (
    <div className="h-full px-3 py-1 flex flex-col justify-end overflow-auto">
      {messages.length > 0 &&
        messages.map((msg, index) => {
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
