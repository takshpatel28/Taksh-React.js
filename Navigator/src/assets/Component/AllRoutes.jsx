import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Login from './Login'
import About from './About'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
