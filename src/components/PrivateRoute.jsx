import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const loginTime = localStorage.getItem("loginTime");
  const currentTime = new Date().getTime();

  const isAuthenticated = token && loginTime && (currentTime - loginTime < 1200000);

  if (!isAuthenticated) {
    localStorage.removeItem("token");
    localStorage.removeItem("loginTime");
    toast.error('Your session has expired. Please log in again.');

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
