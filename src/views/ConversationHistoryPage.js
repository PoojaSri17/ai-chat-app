import React from 'react';
import ConversationHistory from '../components/ConversationHistory';

const ConversationHistoryPage = ({ conversations, onSelect }) => {
  return (
    <div>
      <h1>Conversation History</h1>
      <ConversationHistory conversations={conversations} onSelect={onSelect} />
    </div>
  );
};

export default ConversationHistoryPage;
