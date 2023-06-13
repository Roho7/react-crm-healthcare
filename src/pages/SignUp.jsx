import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../context/AuthContext.jsx";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const { signup, signInWithGoogle } = useAuth();

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    if (password != conPassword) {
      alert("Passwords do not match");
    } else {
      signup(email, password);
      navigate("/");
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
      <h1 className="text-5xl mt-4 font-bold top-10 ">HealthMed+</h1>
      <div className="container flex flex-col items-center max-w-sm p-10 z-10">
        <h1 className="text-xl font-bold text-sky- mb-4">Sign Up</h1>
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
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConPassword(e.target.value)}
          />
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
