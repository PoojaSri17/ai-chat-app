import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';

const ConversationHistory = ({ conversations, onSelect }) => (
  <Drawer variant="permanent">
    <List>
      {conversations.map((conv, index) => (
        <ListItem button onClick={() => onSelect(conv)} key={index}>
          Conversation {index + 1}
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default ConversationHistory;
