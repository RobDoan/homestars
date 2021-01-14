import React from "react";
import ChannelCard from "../components/ChannelCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function ListChannelsPage() {
  return <Grid container xs={4} md={12} spacing={2}>
    {[1, 2, 3, 4, 5].map((i) => <Grid item> <ChannelCard key={i}/> </Grid>)}
  </Grid>
}
