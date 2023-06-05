import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import PatientList from "./reports/PatientList";
import PatientProfile from "./reports/PatientProfile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <div className="p-4 bg-sky-50 main w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Dashboard />} />
          <Route path="/reports" element={<PatientList />} />
          <Route path="/reports/patients/:id" element={<PatientProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
