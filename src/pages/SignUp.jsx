import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    if (document.getElementById("email").value === "") {
      document.getElementById("email").classList.add("border-red-500");
      setError("Please enter a valid email");
    } else if (document.getElementById("password").value === "") {
      document.getElementById("password").classList.add("border-red-500");
      setError("Please enter a password");
    } else if (password != conPassword) {
      document.getElementById("conpassword").classList.add("border-red-500");
      setError("Passwords do not match");
    } else {
      try {
        await signup(email, password);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle(email, password);
  };

  // const signIn = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const signInWithGoogle = async () => {
  //   try {
  //     await signInWithPopup(auth, googleAuth);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-sky-50">
      <h1 className="text-3xl m-4 font-bold text-sky-500 flex gap-2 items-center">
        <FaHandHoldingHeart /> ElderCare+
      </h1>
      <div className="container flex flex-col items-center max-w-sm p-10 z-10">
        <h1 className="text-xl font-bold text-sky-700 mb-4">
          Create an Account
        </h1>

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
          <input
            type="password"
            id="conpassword"
            placeholder="Confirm Password"
            onChange={(e) => setConPassword(e.target.value)}
          />
          <div className=" text-red-500 font-bold">
            <span id="err-msg">{error}</span>
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
          <button onClick={handleGoogle}>
            <FcGoogle />
            Sign in With Google
          </button>
          <span className="text-sky-700">
            Already have an account?{" "}
            <Link to="/login" className="hover:text-fuchsia-500">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
