import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase.js";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user] = useAuthState(auth);
  return <div>{auth.currentUser ? <Home /> : <Login />}</div>;
}

export default App;
