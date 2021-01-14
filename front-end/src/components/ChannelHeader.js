import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { red } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1)
  },
  avatarWrapper: {},
  avatar: {
    backgroundColor: red[500],
  },
  channelTitleWrapper: {
    flexGrow: 1,
    textAlign: 'center'
  }
}));

export default function ChannelHeader() {
  const classes = useStyles();
  return <Grid container spacing={2} alignItems='center' wrap="nowrap" className={classes.root}>
    <Grid item className={classes.avatarWrapper}>
      <Avatar className={classes.avatar}>G</Avatar>
    </Grid>
    <Grid item className={classes.channelTitleWrapper}>
      <Typography gutterBottom variant="h5" component="h2">
        Channel Name
      </Typography>
    </Grid>
  </Grid>
}
