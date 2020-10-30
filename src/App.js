import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Questionnaire from './pages/Questionnaire';
import Tips from './pages/Tips';
import Profile from './pages/Profile';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { UserState } from './states/UserState.js';

const App = () => {  
  
  const userState = {
    login: true,
    counter: 1
  };

  return (
    <UserState.Provider value={userState}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>
          <Route path='/questionnaire'>
            <Questionnaire />
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
    </UserState.Provider>
  );
};

export default App;
