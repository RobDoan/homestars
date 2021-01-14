import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import ChannelHeader from "./ChannelHeader";
import MessageInput from "./MessageInput";

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
    paddingBottom: 80
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
  return <Box className={classes.root}>
    <Box className={classes.channelHeader}>
      <ChannelHeader/>
      <Divider/>
    </Box>
    <Box className={classes.chatContent}>
    </Box>
    <Box className={classes.inputMessage}>
      <MessageInput/>
    </Box>
  </Box>
}
