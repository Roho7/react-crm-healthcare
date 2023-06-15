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
import { FaHandHoldingHeart } from "react-icons/fa";
import { useAuth } from "../context/AuthContext.jsx";

function Navbar() {
  const { signout } = useAuth();

  const handleLogout = async () => {
    try {
      signout(auth);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-between w-1/6 h-screen bg-sky-400 text-lg text-cyan-50 fixed">
      <div>
        <h1 className="text-3xl m-4 font-bold text-sky-50 flex gap-2 items-center">
          <FaHandHoldingHeart /> ElderCare+
        </h1>
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
        <Link to="/analytics" className="navbar-link">
          <FiBarChart2 />
          Analytics
        </Link>
        <Link to="/reports/patients/bills" className="navbar-link">
          <FiDollarSign />
          Bills
        </Link>
      </div>
      <div className="flex flex-col">
        <Link to="/" className="navbar-link">
          <FiUser />
          Profile
        </Link>
        <Link to="/" className="navbar-link" onClick={handleLogout}>
          <FiLogOut />
          Log Out
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
