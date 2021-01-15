import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import {isUserLoggedIn, checkLogin} from './features/authentication/authenticationSlice';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function AppRouter() {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(isUserLoggedIn);
  useEffect(() => {
    dispatch(checkLogin())
  }, [])
  const RenderComponent = isLoggedIn ? ChatPage : LoginPage;
  return <RenderComponent/>
}

function App() {
  return (
    <Container component="main">
      <CssBaseline/>
      <AppRouter/>
    </Container>
  );
}

export default App;
