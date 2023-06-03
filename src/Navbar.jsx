import React from "react";
import { Link } from "react-router-dom";
import {
  FiBarChart,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiFile,
  FiFileText,
  FiHome,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import App from "./App";

function Navbar() {
  return (
    <div className="flex flex-col justify-between w-1/6 h-screen bg-sky-400 p-4 text-lg text-cyan-50 fixed">
      <div>
        <h1 className="text-3xl">HealthMed</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-4">
          <FiHome />
          Dashboard
        </Link>
        <Link to="/" className="flex items-center gap-4">
          <FiCalendar />
          Appointments
        </Link>
        <Link to="/reports" className="flex items-center gap-4">
          <FiFileText />
          Reports
        </Link>
        <Link to="/" className="flex items-center gap-4">
          <FiBarChart2 />
          Progress
        </Link>
        <Link to="/" className="flex items-center gap-4">
          <FiDollarSign />
          Finances
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-4">
          <FiUser />
          Profile
        </Link>
        <Link to="/" className="flex items-center gap-4">
          <FiSettings />
          Preferences
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
