import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
