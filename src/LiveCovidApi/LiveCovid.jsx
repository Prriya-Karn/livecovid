import React, { useEffect, useState } from "react";
const LiveCovid = ()=>{
    const[data,update] = useState([]);
   
const api = async()=>{

    try{
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        
            update(actualData.statewise[0])
        
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
    <h1 className="text-center mt-5 head">Live Covid Data</h1>
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
