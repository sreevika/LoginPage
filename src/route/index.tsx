import { Routes, Route } from "react-router-dom";
import React from 'react';
import LoginPage from "../pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
    
    </Routes>
  );
};
export default Router;
