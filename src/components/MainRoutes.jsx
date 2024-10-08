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
import { ThemeProvider } from './ThemeContext';
import PrivateRoute from "./PrivateRoute.jsx";
import LearnMore from "./LearnMore.jsx";
const MainRoutes = () => {
  return (
    <ThemeProvider>
    <Routes>
      <Route element={<OutletFile />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-detail" element={<ContactDetail />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Route>
      <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      <Route path="/new-ticket" element={<PrivateRoute><NewTicket /></PrivateRoute>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users" element={<Users />} />
    </Routes>
    </ThemeProvider>
  );
};

export default MainRoutes;
