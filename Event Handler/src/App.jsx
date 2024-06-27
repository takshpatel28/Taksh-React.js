import { useState } from 'react'
import './App.css'
import Post from './components/Post'


function App() {
  const [toggle,settoggle]=useState(false)

  return (
    <>
     <button onClick={()=>settoggle(!toggle)}>{toggle ? "Back" : "GET POSTS"}</button>

     {toggle ? <Post /> : ""}
    </>
  )
}

export default App
