import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadMessages, messages } from './messageSlice'
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TextMessage from "../../components/messages/TextMessage";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column-reverse',
    marginBottom: theme.spacing(2),
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  itemLeft: {
    alignSelf: 'flex-start'
  },
  itemRight: {
    alignSelf: 'flex-end'
  }
}));

export default function MessageList(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const messagesOnChannel = useSelector(messages)
  const loadMessagesOnChannel = () => dispatch(loadMessages(props.channel))
  useEffect(() => {
    loadMessagesOnChannel()
  }, [props.channel])
  return <Box className={classes.root}>
    {
      messagesOnChannel.map((message, index) => {
        const isMine = index%2 === 0
        const boxClass = isMine ? classes.itemRight : classes.itemLeft
        return <Box className={boxClass}>
          <TextMessage message={message} isMine={isMine}/>
        </Box>
      })
    }
  </Box>
}
