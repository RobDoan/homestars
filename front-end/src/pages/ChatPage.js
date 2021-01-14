import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import CurrentChatWindow from '../components/CurrentChatWindow';
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    padding: 0,
    margin: 0,
    marginBottom: theme.spacing(2)
  },
  chatWrapper: {
    display: 'flex',
    alignItems: 'stretch',
  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
    height: '80vh'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  contentWrapper: {
    position: "relative",
    flexGrow: 1,

  },
  content: {
    height: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerRight() {
  const classes = useStyles();

  return (
    <div>

      <Container className={classes.chatWrapper} fluid>
        <Paper elevation={0} className={classes.drawer}>
          <Typography variant="h2" noWrap>Test</Typography>
          <Divider/>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </Paper>
        <main className={classes.contentWrapper}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" noWrap>
                Permanent drawer
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper elevation={0} className={classes.content}>
            <CurrentChatWindow/>
          </Paper>

        </main>
      </Container>
    </div>
  );
}
