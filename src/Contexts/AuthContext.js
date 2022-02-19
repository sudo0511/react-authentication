import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

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

  const user = {
    currentUser,
    signup,
  };

  //creating user signup using email and password in firebase, it will return a promise

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};
