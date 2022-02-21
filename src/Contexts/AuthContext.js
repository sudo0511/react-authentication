import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContext = React.createContext();

export const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut();
  }

  const user = {
    currentUser,
    signup,
    login,
    logout,
  };

  //creating user signup using email and password in firebase, it will return a promise

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
