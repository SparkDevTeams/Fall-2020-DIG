import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Questionnaire from '../pages/Questionnaire';
import { useAuth } from '../states/userState';

/*this component is needed so that we can choose to route between two
other components, the reason this does not work in App.js
is due to the fact that the AuthProvider is the one that initializes the state
and if we try to access the state from above, like we would need to load the state in
then for App.js the state will be null from its point of view
since this component is nested within, useAuth has loaded correctly */

export default function AuthRoute() {
  const { user } = useAuth();
  return (
    <Route
      render={() => {
        user && console.log(user.email);
        return user ? <Questionnaire /> : <Redirect to='/log-in' />;
      }}
    ></Route>
  );
}
