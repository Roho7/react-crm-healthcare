import React, { useContext, createContext, useState, useEffect } from "react";
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
  const [currentUserState, setCurrentUserState] = useState();

  // * FUNCTIONS *

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUserState(user);
    });
  });

  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signout = async () => {
    return signOut(auth);
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.log(err);
    }
  };

  const value = {
    currentUserState,
    signup,
    login,
    signout,
    signInWithGoogle,
  };

  console.log("user", currentUserState);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
