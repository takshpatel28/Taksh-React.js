import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor:"#28282B",height:"45px"}}>
      <nav style={{display:"flex",justifyContent:"space-around",padding:"7px 0"}}>
        <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/"}>Home</NavLink>
        <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/about"}>About</NavLink>
        <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/product"}>Product</NavLink>
        <NavLink style={({isActive})=>{
        return (isActive ? {color: 'white',fontSize:"18px",fontWeight:"bold",transition:"all 0.3s ease-in-out"} : {color: '#C0C0C0',transition:"all 0.3s ease-in-out"})}} to={"/login"}>Login</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
