import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import ChatMessages from '../components/ChatMessages';
import ConversationFeedback from '../components/ConversationFeedback';
import responses from '../data/responses.json';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const handleSendMessage = (message) => {
    const userMessage = { text: message, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    // Simulating an AI response
    const aiResponse = responses.conversations.find((conv) => conv.question === message);
    if (aiResponse) {
      const aiMessage = { text: aiResponse.response, isUser: false };
      setMessages((prev) => [...prev, userMessage, aiMessage]);
    }
  };

  const handleFeedbackSubmit = (feedback) => {
    setFeedback(feedback);
    // Save feedback logic
  };

  return (
    <div>
      <ChatMessages messages={messages} />
      <ChatBox onSend={handleSendMessage} />
      {messages.length > 0 && !feedback && (
        <ConversationFeedback onSubmit={handleFeedbackSubmit} />
      )}
    </div>
  );
};

export default ChatPage;
