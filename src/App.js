import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './views/ChatPage';
import FeedbackPage from './views/FeedbackPage';
import ConversationHistoryPage from './views/ConversationHistoryPage';
import responses from './data/responses.json';

const App = () => {
  const [conversations, setConversations] = useState(responses.conversations);
  const [feedbackData, setFeedbackData] = useState([]);

  const handleSelectConversation = (conv) => {
    // Load conversation logic
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/feedback" element={<FeedbackPage feedbackData={feedbackData} />} />
        <Route path="/history" element={<ConversationHistoryPage conversations={conversations} onSelect={handleSelectConversation} />} />
      </Routes>
    </Router>
  );
};

export default App;
