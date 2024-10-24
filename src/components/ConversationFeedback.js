import React, { useState } from 'react';
import { Rating, TextField, Button } from '@mui/material';

const ConversationFeedback = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    onSubmit({ rating, feedback });
  };

  return (
    <div>
      <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} />
      <TextField
        label="Additional Feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </div>
  );
};

export default ConversationFeedback;
