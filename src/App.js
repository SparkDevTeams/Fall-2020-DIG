import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Survey from './pages/Survey';
import Tips from './pages/Tips';
import Profile from './pages/Profile';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
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
        <Route path='/profile'>
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
