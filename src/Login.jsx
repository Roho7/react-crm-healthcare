import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleAuth } from "./config/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (err) {
      console.log(err);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(auth.currentUser);

  return (
    <div className="flex justify-center items-center h-screen bg-sky-50">
      <div className="container flex flex-col items-center w-1/4 p-10">
        <h1 className="text-xl font-bold text-sky- mb-4">Login</h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn}>Login</button>
          <button
            className="flex items-center justify-center gap-2"
            onClick={signInWithGoogle}
          >
            <FcGoogle />
            Sign in With Google
          </button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
