import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Routes/Home';
import Login from '../Routes/Login';
import PrivateRoute from '../Components/PrivateRoute';
import Dashboard from '../Routes/Dashboard';
import SingleProductPage from '../Routes/SingleProductPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/products/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
    </Routes>
  );
};

export default AllRoutes;
