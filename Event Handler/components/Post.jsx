import React, { useEffect, useState } from 'react'

const Post = () => {
    const [data,setdata]=useState([])
    const [page,setpage]=useState(1)

    const fetchdata=()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then((res)=>res.json())
        .then((data)=>setdata(data))
        .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchdata()
    },[page])

  return (
    <div>
      {data.map((el)=>(
        <div className='content'>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
        </div>
      ))}
      <br />
      <button disabled={page==0} onClick={()=>setpage(page-1)}>-</button>
      <span> {page} </span>
      <button disabled={page==10} onClick={()=>setpage(page+1)}>+</button>
    </div>
  )
}

export default Post
