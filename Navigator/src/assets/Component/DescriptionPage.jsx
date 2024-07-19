import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DescriptionPage = () => {

    const {id} = useParams()
    const [data,setdata]=useState({})
    const getdata=()=>{
        axios.get(`http://localhost:3000/product/${id}`)
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdata()
    },[])
  return (
    <div>
      <h1>Description Page</h1>
      <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{width:"50%",textAlign:"center"}}>
        <h1>{data.id}</h1>
        <img src={data.image} alt="" height={250} width={250} />
        <h3>{data.title}</h3>
        <h4>{data.price}</h4>
        <h4>{data.category}</h4>
        <p>{data.description}</p>
      </div>
      </div>
    </div>
  )
}

export default DescriptionPage
