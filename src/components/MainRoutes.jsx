// components/MainRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import OutletFile from "./OutletFile.jsx";
import App from "../App.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Dashboard from "./Dashboard.jsx";
import NewTicket from "./NewTicket.jsx";
import ContactDetail from "./ContactDetail.jsx";
import About from "./About.jsx";
import Users from "./Users.jsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<OutletFile />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-detail" element={<ContactDetail />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-ticket" element={<NewTicket />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default MainRoutes;
