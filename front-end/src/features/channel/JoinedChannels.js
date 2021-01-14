import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ListItem from "@material-ui/core/ListItem";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";

import { joinedChannels, loadJoinedChannels, selectChannel } from './channelsSlice'

export default function JoinedChannels() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadJoinedChannels())
  }, [])
  const channels = useSelector(joinedChannels);
  const changeChannel = (channelId) => dispatch(selectChannel(channelId));

  return <List>
    {channels.map((channel, index) => (
      <ListItem button key={channel.id} onClick={() => changeChannel(channel.id)}>
        <ListItemIcon>{index % 2 === 0 ? <PeopleOutlineRoundedIcon/> : <PersonRoundedIcon/>}</ListItemIcon>
        <ListItemText primary={channel.name}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="leave">
            <ExitToAppRoundedIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
}
