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
    if (activeFriend && topicSelected) {
      getConversationID();
    }
  }, [activeFriend, topicSelected]);

  return (
    <form onSubmit={sendMessage} className="w-full mb-2 flex " action="">
      <input
        className="px-3 ml-3 w-full rounded-xl border-none h-14 pr-8 pl-5 rounded focus:shadow focus:outline-none bg-inputbg text-inputtext"
        value={messageInput}
        onChange={updateMessageInput}
      />
      <button
        type="submit"
        className="mx-2 bg-emerald-500 rounded-xl py-2 px-3 hover:bg-emerald-600 break-normal"
      >
        Send
      </button>
    </form>
  );
}

export default InputContainer;
