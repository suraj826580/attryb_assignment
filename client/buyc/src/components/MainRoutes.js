import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AddCar from "../pages/AddCar";
import AddCarForm from "./AddCarForm";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addcar" element={<AddCar />} />
      <Route path="/addcar/:id" element={<AddCarForm />} />
    </Routes>
  );
};

export default MainRoutes;
