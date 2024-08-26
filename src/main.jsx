import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import OutletFile from "./components/OutletFile.jsx";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx";
import NewTicket from "./components/NewTicket.jsx";
import ContactDetail from "./components/ContactDetail.jsx";
import About from "./components/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<OutletFile />}>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-detail" element={<ContactDetail />} />
        </Route>
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
