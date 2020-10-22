import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './MessageBox.css';

const MessageBox = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`messageBox ${isUser && 'messageBox__user'}`}>
      <Card className={isUser ? 'messageBox__userCard': 'messageBox__guestCard'}>
        <CardContent>
          <Typography 
            color="white"
            variant="h5" 
            component="h2"
          >
            {!isUser && `${message.username || 'Unknown User' }: `}: {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default MessageBox;
