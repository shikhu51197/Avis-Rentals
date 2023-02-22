import React from "react";
import { Routes, Route } from "react-router-dom";
import Bookings from "../Pages/Bookings";
import Cars from "../Pages/Cars";
import Dashboard from "../Pages/Dashboard";
import Feedback from "../Pages/Feedback";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Users from "../Pages/Users";

type Props = {};

const AllRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/users" element={<Users />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
