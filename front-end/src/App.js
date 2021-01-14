import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';


function App() {
  return (
    <Container component="main">
      <CssBaseline/>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path='/channels'>
            <ChatPage/>
          </Route>

        </Switch>
      </Router>
    </Container>
  );
}

export default App;
