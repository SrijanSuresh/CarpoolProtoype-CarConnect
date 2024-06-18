// src/context/AuthContexts.js
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
//import { initializeApp } from 'firebase/app';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser) ;  
    return unsubscribe;
  }, []);

  async function initializeUser(user){
    if(user){
      setCurrentUser({...user});
      setUserLoggedIn(true);
    }else{
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false)
  }

  // function signup(email, password) {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // }

  const value = {
    currentUser,
    userLoggedIn,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
