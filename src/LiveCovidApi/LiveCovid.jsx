import React, { useEffect, useState } from "react";
const key = "AIzaSyAW6AQdmmu4If16DM4WlCoW0t9RXv9wnk4";
const LiveCovid = ()=>{
    const[data,update] = useState([]);
   
const api = async()=>{
    try{
        const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${key}
        &part=snippet,statistics&fields=items(id,snippet,statistics)`)
        const actualData = await res.json();
        
            update(res)
         


       
        
    }
    catch(error){
    // alert(error)
    }
    }
    useEffect(()=>{
        api()
    
    },[])

    
    return (
    <>

<div className="container">
  <div className="div1 div"> <h3><span>Our</span>Country</h3>
      <h1 className = "h1">India</h1>
  </div>
  <div className="div2 div">
  <h3><span>{data.state}</span>Recovered</h3>
      <h1 className = "h1">{data.recovered}</h1>
  </div>
  <div className="div3 div">
  <h3><span>{data.state}</span>Confirmed</h3>
      <h1 className = "h1">{data.confirmed}</h1>
  </div>
  <div className="div4 div">
  <h3><span>{data.state}</span>Active</h3>
      <h1 className = "h1">{data.active}</h1>
  </div>
  <div className="div5 div">
  <h3><span>{data.state}</span>Update</h3>
      <h1 className = "h1">{data.lastupdatedtime}</h1>
  </div>
  <div className="div6 div">
  <h3><span>{data.state}</span>Delta</h3>
      <h1 className = "h1">{data.deltaconfirmed}</h1>
  </div>
  
</div>
    </>
    )
}

export default LiveCovid;
