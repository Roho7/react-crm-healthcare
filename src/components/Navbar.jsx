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
  FiLogOut,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.js";
import App from "../App.jsx";

function Navbar() {
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-between w-1/6 h-screen bg-sky-400 text-lg text-cyan-50 fixed">
      <div>
        <h1 className="text-3xl m-4 font-bold text-sky-50">HealthMed+</h1>
      </div>
      <div className="flex flex-col">
        <Link to="/" className="navbar-link">
          <FiHome />
          Dashboard
        </Link>
        <Link to="/" className="navbar-link">
          <FiCalendar />
          Appointments
        </Link>
        <Link to="/reports" className="navbar-link">
          <FiFileText />
          Reports
        </Link>
        <Link to="/" className="navbar-link">
          <FiBarChart2 />
          Progress
        </Link>
        <Link to="/" className="navbar-link">
          <FiDollarSign />
          Finances
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/" className="navbar-link">
          <FiUser />
          Profile
        </Link>
        <Link to="/" className="navbar-link" onClick={logOut}>
          <FiLogOut />
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
