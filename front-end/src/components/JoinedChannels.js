import React from "react";
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ListItem from "@material-ui/core/ListItem";
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";


export default function JoinedChannels() {
  return <List>
    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
      <ListItem button key={text}>
        <ListItemIcon>{index % 2 === 0 ? <PeopleOutlineRoundedIcon/> : <PersonRoundedIcon/>}</ListItemIcon>
        <ListItemText primary={text}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="leave">
            <ExitToAppRoundedIcon/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
}
