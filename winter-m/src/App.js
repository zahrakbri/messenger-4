import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/onboard/login.js'
import Signup from './components/onboard/signup'
import Messenger from './components/messenger/messenger'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
