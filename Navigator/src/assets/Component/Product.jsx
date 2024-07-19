import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)
    const {id}=useParams()

    const getdatafunction=()=>{
        axios.get("http://localhost:3000/product",{
            params:{
                _page:page,
                _limit:5
            }
        })
        .then((res)=>setdata(res.data))
        .catch((err)=>console.log(err))
    }
    useEffect(()=>{
        getdatafunction()
    },[page])
  return (
    <div>
      <h1>Product Page</h1><br />
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((el)=>(
            <div key={el.id} style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",margin:"10px 20px",height:"420px",padding:"25px 0"}}>
                <h3>{el.category}</h3>
             <Link to={`/singlepage/${el.id}`}><img src={el.image} alt="" height={250} width={250}/></Link>
                <h3>{el.price}</h3>
                <h4>{el.title}</h4>
            </div>
        ))}
        </div>
        <button disabled={page==1} onClick={()=>setpage(page-1)}>Pre</button>
        <span> {page} </span>
        <button disabled={page==4} onClick={()=>setpage(page+1)}>Next</button>
    </div>
  )
}

export default Product
