import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PatientList from "./pages/PatientList";
import PatientProfile from "./pages/PatientProfile";
import { Routes, Route } from "react-router-dom";
import { db } from "./config/firebase";
import { getDocs, collection } from "@firebase/firestore";
import { AuthProvider } from "./context/AuthContext";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./Home";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={<PrivateRoute>{currentUser && <Home />}</PrivateRoute>}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
