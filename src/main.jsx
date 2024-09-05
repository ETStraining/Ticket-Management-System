import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import MainRoutes from "./components/MainRoutes.jsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainRoutes />
      <ToastContainer /> 
    </Router>
  </React.StrictMode>
);
