import React from 'react'
import img from './img/copyyyyy.png' 

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaStaylinked } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import './profile.css'


const ProfileCard = () => {
  return (
    <div>
      <div className='main d-flex flex-sm-column flex-md-row'>
       <div className='heading text-center ps-5 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-sm-center text-lg-start'>
          <h1>Hi, Hi, I'm Taksh Patel.</h1><br />
          <p style={{color:""}}>A Freelance Web developer from Surat. I convert custom <br />web designs to bootstrap templates. <br /><br />I make YouTube videos and write Blog.</p>
          <button className='text-white btnn rounded-5'>I'M AVAILABLE</button>
          <br /><br />
          <FaFacebookF />
          <FaXTwitter className='ms-2' style={{color:"grey"}}/>
          <FaStaylinked className='ms-2' style={{color:"grey"}}/>
          <FaGithub className='ms-2' style={{color:"grey"}}/>

        </div>
        <div className='img pe-5 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-none d-sm-none d-md-block'>
            <img src={img} alt="" style={{height:"450px",width:"250px"}}/>
        </div>
       </div>
    </div>
  )
}

export default ProfileCard
