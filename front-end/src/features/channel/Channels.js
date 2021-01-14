import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";

import { allChannels, getChannels, joinChannel } from './channelsSlice'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";


export function ChannelList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannels())
  })
  const channels = useSelector(allChannels);
  const addChannel = (channel) => dispatch(joinChannel(channel));

  return <Grid container spacing={2}>
    {channels.map((channel) => (
      <Grid item key={channel.id}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {channel.name}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton edge="end" aria-label="join" onClick={() => addChannel(channel)}>
              Join <AddIcon/>
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
}

export function ChannelsModal(props) {
  const {open, handleClose} = props
  return <Dialog open={open}
                 maxWidth
                 onClose={handleClose}>
    <DialogTitle> Join Channel </DialogTitle>
    <DialogContent>
      <ChannelList/>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
}

export function ChannelPicker() {
  const [isOpen, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const openDialog = () => setOpen(true)
  return <div>
    <Grid container justify="space-between" alignItems='center' style={{padding: 10}}>
      <Grid item xs={8} lg={10}>
        Channels
      </Grid>
      <Grid item>
        <IconButton edge="end" aria-label="open" onClick={openDialog}>
          <AddIcon/>
        </IconButton>
      </Grid>
    </Grid>
    <ChannelsModal open={isOpen} handleClose={handleClose}/>
  </div>
}
