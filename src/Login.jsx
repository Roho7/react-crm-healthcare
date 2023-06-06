import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config/firebase.js";

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
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container flex flex-col items-center max-w-max p-10">
        <h1 className="text-xl font-bold text-sky- mb-4">Login</h1>
        <form action="" className="flex flex-col items-center gap-4">
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
          <button className="flex items-center gap-2">
            <FcGoogle />
            Sign in With Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
