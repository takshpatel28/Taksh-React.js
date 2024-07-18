import React, { useContext, useState } from 'react'
import { themeContext } from '../context/ThemeContex'
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";


const Button = () => {
    const {themeupdaterfunction,theme} = useContext(themeContext)
  return (
    <div>
          <button style={{marginTop:"5px",backgroundColor:theme=="light"?"white":"black",color:theme=="light"? "black":"white",transition:"0.3s ease-in-out"}} onClick={themeupdaterfunction}>
               { theme=="light"?<MdWbSunny/>:<IoMdMoon/> }
          </button> 
         
    </div>

  )
}


export default Button
