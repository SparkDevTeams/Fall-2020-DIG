import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Questionnaire from './pages/Questionnaire';
import Tips from './pages/Tips';
import Profile from './pages/Profile';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import { UserProvider } from './states/userState';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
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
    </UserProvider>
  );
};

export default App;
