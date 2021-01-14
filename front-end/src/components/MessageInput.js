import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import SendIcon from '@material-ui/icons/Send';
import GifIcon from '@material-ui/icons/Gif';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function MessageInput(props) {
  const classes = useStyles();
  const [message, setMessage] = useState('')
  const typingMessageHandler = (e) => {
    setMessage(e.target.value)
  }
  const submitMessage = () => {
    props.onSubmitHanlder({content: message, type: 'text'})
    setMessage('')
  }

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="menu" color='secondary'>
          <GifIcon/>
        </IconButton>
        <Divider className={classes.divider} orientation="vertical"/>
        <InputBase
          className={classes.input}
          value={message}
          placeholder="Type Message"
          onChange={typingMessageHandler}
        />
        <Divider className={classes.divider} orientation="vertical"/>
        <IconButton color="primary"
                    className={classes.iconButton}
                    onClick={submitMessage}
                    aria-label="directions">
          <SendIcon/>
        </IconButton>
      </Paper>
    </React.Fragment>
  );
}
