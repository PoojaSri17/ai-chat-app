import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Feedback = ({ onFeedback }) => (
  <div className="feedback-icons">
    <ThumbUpIcon onClick={() => onFeedback('like')} />
    <ThumbDownIcon onClick={() => onFeedback('dislike')} />
  </div>
);

export default Feedback;
