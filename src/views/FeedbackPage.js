import React from 'react';
import FeedbackTable from '../components/FeedbackTable';

const FeedbackPage = ({ feedbackData }) => {
  return (
    <div>
      <h1>Feedback</h1>
      <FeedbackTable feedbackData={feedbackData} />
    </div>
  );
};

export default FeedbackPage;
