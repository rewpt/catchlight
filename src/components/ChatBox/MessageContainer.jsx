import Message from "./Message";
import React from "react";

export default function MessageContainer() {
  return (
    <div className="h-full px-3 py-1 flex flex-col justify-end">
      <Message className=""> Hey </Message>
      <Message> Hey Breett </Message>
      <Message> What's up </Message>
      <Message> Just doing stuff, you? </Message>
      <Message> Yeah, same doing stuff </Message>
      <Message> Sweet </Message>
      <Message> Yeah, it is pretty sweet </Message>
    </div>
  );
}
