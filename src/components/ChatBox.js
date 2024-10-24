import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const ChatBox = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage(''); // Clear the input
    }
  };

  return (
    <div>
      <TextField
        label="Ask a question"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default ChatBox;
