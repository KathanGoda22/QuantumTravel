import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import Tours from "./../pages/Tours";
import ToursDetails from "./../pages/ToursDetails";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import About from "./../pages/About";
import Thankyou from "../pages/Thankyou";
import SearchResultList from "../pages/SearchResultList";

const routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<ToursDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<Thankyou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
};

export default routers;
