import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddCar from "../pages/AddCar";
import AddCarForm from "./AddCarForm";
import Inverntory from "./Inverntory";
import DashBoard from "./DashBoard";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addcar" element={<AddCar />} />
      <Route path="/addcar/:id" element={<AddCarForm />} />
      <Route path="/inventory" element={<Inverntory />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
};

export default MainRoutes;
