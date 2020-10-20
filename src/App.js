import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Survey from './pages/Survey';
import Tips from './pages/Tips';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/log-in'>
          <LogIn />
        </Route>
        <Route path='/survey'>
          <Survey />
        </Route>
        <Route path='/tips'>
          <Tips />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
