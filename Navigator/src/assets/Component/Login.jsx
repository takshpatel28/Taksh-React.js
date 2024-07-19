import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handleclick=(e)=>{
        e.preventDefault()
        let userdata={
            email,
            password
        }

        axios.post("https://reqres.in/api/login",userdata)
        .then((res)=>{
            let tokenfromreqres= res.data.token
            localStorage.setItem("token",tokenfromreqres)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div>
      <h1>Login Page</h1><br /><br />
      <input onChange={(e)=>setemail(e.target.value)} type="email" placeholder='Enter Your Email' style={{padding:"10px 20px",borderRadius:"5px",border:"1px solid grey"}} required/><br />
      <input onChange={(e)=>setpassword(e.target.value)} type="password"  placeholder='Enter Your Password' style={{padding:"10px 20px",borderRadius:"5px",border:"1px solid grey"}} required/><br /><br />
      <button onClick={handleclick}>Submit</button>
    </div>
  )
}

export default Login
