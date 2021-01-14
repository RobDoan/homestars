import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { isUserLoggedIn } from './features/authentication/authenticationSlice';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function AppRouter() {
  const isLoggedIn = useSelector(isUserLoggedIn);
  useEffect(() => {
    console.info(`ISLOGGED IN  ${isLoggedIn}`)
  })
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
