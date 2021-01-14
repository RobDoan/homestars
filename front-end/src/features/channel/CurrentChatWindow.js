import React from "react";
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import { currentChannel } from './channelsSlice'
import ChannelHeader from "../../components/ChannelHeader";
import MessageInput from "../../components/MessageInput";
import MessageList from "../messages/MessageList";
import MessageEditor from "../messages/MessageEditor";

const ChannelHeaderSize = 80;
const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    background: '#f8f6fd',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  channelHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: theme.zIndex.appBar,
    padding: theme.spacing(2)
  },

  chatContent: {
    padding: theme.spacing(2),
    paddingTop: ChannelHeaderSize,
    paddingBottom: 80,
    height: '100%',
    overflow: 'hidden',
  },
  inputMessage: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function () {
  const classes = useStyles();
  const channel = useSelector(currentChannel)

  if (!channel) return <div/>;

  return <Box className={classes.root}>
    <Box className={classes.channelHeader}>
      <ChannelHeader channel={channel}/>
      <Divider/>
    </Box>
    <Box className={classes.chatContent}>
      <MessageList channel={channel}/>
    </Box>
    <Box className={classes.inputMessage}>
      <MessageEditor channel={channel}/>
    </Box>
  </Box>
}
