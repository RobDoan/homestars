import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {blue, green} from '@material-ui/core/colors';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    maxWidth: 400,
  },
  avatarRed: {
    backgroundColor: blue[500],
    textTransform: 'capitalize'
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  avatarItem: {
    flexShrink: 0,
    flexGrow: 0,
  },
  textItem: {
    flexGrow: 1
  }

}));

function MyMessageAvatar() {
  const classes = useStyles();
  return <Avatar aria-label="recipe" className={classes.avatarGreen}>
    ME
  </Avatar>
}

function MemberAvatar(props) {
  const classes = useStyles();
  const {userName} = props
  const firstCharacter = userName[0]
  return <Avatar aria-label="recipe" className={classes.avatarRed}>
    {firstCharacter}
  </Avatar>
}

function MessageAvatar(props) {
  const {isMine, userName} = props
  return isMine ? <MyMessageAvatar/> : <MemberAvatar userName={userName}/>
}

export default function TextMessage(props) {
  const classes = useStyles();
  const {message} = props
  const {is_mine: isMine} = message
  debugger
  const {content = '', sender: user, created_at: createdAt} = message
  return (
    <Grid container className={classes.root} justify="space-between"
          alignItems="center" spacing={2} wrap="nowrap">
      <Grid item className={classes.avatarItem}>
        <MessageAvatar userName={user.email} isMine={isMine}/>
      </Grid>
      <Grid className={classes.textItem}>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </Grid>
    </Grid>

  );
}
