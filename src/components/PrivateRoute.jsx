import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { currentUserState } = useAuth();
  const navigate = useNavigate();

  if (!currentUserState) {
    return navigate("/login");
  } else {
    return children;
  }
}

export default PrivateRoute;
