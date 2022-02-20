import useForm from "../../hooks/useForm";

function InputContainer(props) {
  const { socket } = props;
  const [messageInput, updateMessageInput, resetMessage] = useForm("");
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send-message", messageInput);
    resetMessage();
  };
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
