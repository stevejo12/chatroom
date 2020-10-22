import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import db from './Firebase/Firebase';
import MessageBox from './Components/MessageBox';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT (state)
  // useEffect = run code on a condition (lifecycle)
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])
  // [] => run once when component loads.

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  })

  const sendMessage = (event) => {
    // this prevent form to refresh the page when enter is clicked.
    event.preventDefault();

    db.collection('messages').add({
      message: text,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    // setMessages([...messages, {username, message: text}]);
    setText('');
  }

  return (
    <div className="App">
      <h1>Chat Room</h1>
      <h2>Welcome {username}</h2>
      
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app__input" value={text} onChange={e => setText(e.target.value)} />
          <IconButton className="app__iconButton" disabled={!text} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
          {/* <Button disabled={!text} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button> */}
        </FormControl>
      </form>

      <FlipMove style={{ marginBottom: '90px' }}>
        {
          messages.map(({id, message}) => (
            <MessageBox key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
