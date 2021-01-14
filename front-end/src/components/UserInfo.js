import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  nameWrapper: {
    display: 'flex'
  },
  name: {
    flexGrow: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }

}));

export default function (props) {
  const classes = useStyles();
  const {name} = props;
  const firstLetter = name[0]
  return <Grid container spacing={2}
               className={classes.root}
               alignItems='center' wrap='nowrap'>
    <Grid item xs={4}>
      <Avatar>{firstLetter}</Avatar>
    </Grid>
    <Grid item xs={8}>
      <Box className={classes.nameWrapper}>
        <Typography variant="h6" className={classes.name}>
          {name}
        </Typography>
      </Box>
    </Grid>
  </Grid>

}
