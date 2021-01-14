import React from 'react';
import { useDispatch } from "react-redux";

import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { login } from '../features/authentication/authenticationSlice';
import UserSignInForm from '../components/UserSignInForm'

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
}));

export default function LoginPage() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const loginFn = (data) => {
    dispatch(login(data))
  }

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <UserSignInForm onSubmitFn={loginFn}/>
    </div>
  );
}
