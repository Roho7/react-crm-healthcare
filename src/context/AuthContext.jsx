import React, { useContext, createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleAuth } from "../config/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  // * FUNCTIONS *

  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = async (email, password) => {
    return signOut(auth);
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  //   return unsubscribe;
  // }, []);

  console.log(currentUser);

  const value = {
    currentUser,
    signup,
    login,
    signout,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
