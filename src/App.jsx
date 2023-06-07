import "./App.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firebase.js";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
