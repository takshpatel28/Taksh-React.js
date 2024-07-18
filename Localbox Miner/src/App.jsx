import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MidSection from './Components/MidSection'
import Button from './Components/Button'
import { themeContext } from './context/ThemeContex'

function App() {
  const {theme}=useContext(themeContext)
  return (
    <>
    <div style={{backgroundColor:theme=="light"?"white":"black",color:theme=="light"?"black":"white",transition:"0.3s ease-in-out"}}>
      <Navbar />
      <MidSection />
    </div>
    <Button />
    </>
  )
}

export default App
