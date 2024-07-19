import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"#28282B",height:"45px"}}>
      <nav style={{display:"flex",justifyContent:"space-around",padding:"7px 0"}}>
        <NavLink style={{color:"#C0C0C0"}} to={"/"}>Home</NavLink>
        <NavLink style={{color:"#C0C0C0"}} to={"/about"}>About</NavLink>
        <NavLink style={{color:"#C0C0C0"}} to={"/product"}>Product</NavLink>
        <NavLink style={{color:"#C0C0C0"}} to={"/login"}>Login</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
