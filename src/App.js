import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Questionnaire from './pages/Questionnaire';
import Tips from './pages/Tips';
import Profile from './pages/Profile';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import firebaseConn from './assets/firebase';

const App = () => {
  console.log(firebaseConn)
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
  );
};

export default App;
