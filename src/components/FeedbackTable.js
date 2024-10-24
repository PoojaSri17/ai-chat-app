import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const FeedbackTable = ({ feedbackData }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Conversation</TableCell>
        <TableCell>Rating</TableCell>
        <TableCell>Feedback</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {feedbackData.map((feedback, index) => (
        <TableRow key={index}>
          <TableCell>Conversation {index + 1}</TableCell>
          <TableCell>{feedback.rating}</TableCell>
          <TableCell>{feedback.text}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default FeedbackTable;
