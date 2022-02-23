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
        console.log("RESPONSE DATA MESSAGES", response.data);
        setMessages(response.data);
        console.log("MESSAGES WITH FRIEND", messages);
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
        console.log("this is current user_id response", response.data);
        setCurrentUserId(response.data[0]);
        console.log("current user is", currentUserId);
      } catch (err) {
        console.log(err);
      }
    };
    getUserId();
  }, []);
  // const chatMsgsArr = [
  //   {
  //     user_id: 1,
  //     conversation_id: 3,
  //     content: "Hey",
  //   },
  //   {
  //     user_id: 2,
  //     conversation_id: 3,
  //     content: "Hey waddup?",
  //   },
  //   {
  //     user_id: 1,
  //     conversation_id: 3,
  //     content: "Nm, u?",
  //   },
  //   {
  //     user_id: 2,
  //     conversation_id: 3,
  //     content: "Nm, what a gr8 movie",
  //   },
  //   {
  //     user_id: 2,
  //     conversation_id: 3,
  //     content: "Would love to watch it again",
  //   },
  //   {
  //     user_id: 1,
  //     conversation_id: 3,
  //     content: "Yeah let's watch it sometime",
  //   },
  // ];
  return (
    <div className="h-full px-3 py-1 flex flex-col justify-end">
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
