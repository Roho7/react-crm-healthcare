import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (document.getElementById("email").value === "") {
      document.getElementById("email").classList.add("border-red-500");
      setError("Please enter your Email");
      return;
    } else if (document.getElementById("password").value === "") {
      document.getElementById("password").classList.add("border-red-500");
      setError("Please enter password");
      return;
    } else {
      try {
        await login(email, password);
        navigate("/");
      } catch (err) {
        console.log(err);
        return;
      }
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogle(email, password);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-sky-50">
      <h1 className="text-5xl mt-4 font-bold top-10 ">HealthMed+</h1>
      <div className="container flex flex-col items-center max-w-sm p-10 z-10">
        <h1 className="text-xl font-bold text-sky- mb-4">Login</h1>
        <div className="flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            placeholder="E-mail"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className=" text-red-500 font-bold">
            <span id="err-msg">{error}</span>
          </div>
          <button onClick={handleSignIn}>Login</button>
          <button onClick={handleGoogle}>
            <FcGoogle />
            Sign in With Google
          </button>
          <span className="text-sky-700">
            Don't have an account?{" "}
            <Link to="/signup" className="hover:text-fuchsia-500">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
