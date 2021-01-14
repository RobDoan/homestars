import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import CurrentChatWindow from '../components/CurrentChatWindow';
import Paper from "@material-ui/core/Paper";

import UserInfo from "../components/UserInfo";
import JoinedChannels from "../components/JoinedChannels";
import Grid from "@material-ui/core/Grid";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
  },
  drawer: {
    height: '100%',
    flexShrink: 0,
    flexGrow: 0,
    width: drawerWidth,
    background: 'linear-gradient(#8e2de2 0%, #4a00e0 100%)',
    color: '#fff'
  },
  content: {
    display: 'flex',
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}
          alignItems='stretch' justify="space-between">
      <Grid item>
        <Paper elevation={0} className={classes.drawer}>
          <UserInfo name="Quy"/>
          <Divider/>
          <JoinedChannels/>
        </Paper>
      </Grid>
      <Grid item className={classes.content}>
        <CurrentChatWindow/>
      </Grid>
    </Grid>
  );
}
