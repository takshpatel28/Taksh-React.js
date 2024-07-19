import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Login from './Login'
import About from './About'
import Home from './Home'
import PrivatePage from './PrivatePage'
import DescriptionPage from './DescriptionPage'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singlepage/:id" element={<DescriptionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={
          <PrivatePage>
          <Product />
          </PrivatePage>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default AllRoutes
