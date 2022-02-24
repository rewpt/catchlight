import { useState, useEffect } from "react";
import useForm from "../../hooks/useForm";
const axios = require("axios");

function InputContainer(props) {
  const { activeFriend, topicSelected } = props;

  const jwt = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  };

  const [messageInput, updateMessageInput, resetMessage] = useForm("");
  const [conversationID, setConversationID] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    await axios.post(
      "/api/conversations/messagesend",
      {
        conversationID: conversationID,
        content: messageInput,
      },
      jwt
    );

    resetMessage();
  }

  useEffect(() => {
    const getConversationID = async () => {
      try {
        const response = await axios.post(
          `/api/conversations/messages`,
          { activeFriend: activeFriend, topicSelected: topicSelected },
          jwt
        );
        setConversationID(response.data[0].conversation_id);
      } catch (err) {
        console.log(err);
      }
    };
    getConversationID();
  }, [activeFriend, topicSelected]);

  return (
    <form onSubmit={sendMessage} className="w-full mb-1 flex" action="">
      <input
        className="px-3 ml-3 w-full"
        value={messageInput}
        onChange={updateMessageInput}
      />
      <button type="submit" className="mx-2 bg-send-btn rounded-lg py-2 px-3">
        Send
      </button>
    </form>
  );
}

export default InputContainer;
