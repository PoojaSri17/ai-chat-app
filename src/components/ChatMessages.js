import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index} className={msg.isUser ? "user-msg" : "ai-msg"}>
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
