import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../assets/firebase';

const userContext = createContext()

//shortcut hook to be able to access all functions from the context when we want
export function useAuth(){
  return useContext(userContext)
}

//useContext.Provider component that also sets the state for the rest of the App
export function UserProvider({children}) {

  //state to keep track of the user as they sign-up/log-in
  const [user, setUser] = useState()

  //sign up through firebase api
  function signup(email, password){
    return auth.createUserWithEmailAndPassword(email,password)
  }
  
  /* firebase api has its own listener for when the user has signed in or not
  we only want to do this once when the sign in page is mounted, once it is 
  un mounted there is no more need for the listener */
  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      setUser(user)
    })

    return unsub;
  },[])
  
  //useContext state to keep track of, where we also store useful functions and the user
  const defaultValue ={
    user,
    signup,
    //login,
    //logout
  }

  return(
    <userContext.Provider value={defaultValue}>
      {children}
    </userContext.Provider>
  );
};


