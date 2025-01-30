import React, { useState } from 'react'

function WeatherForcast() {
    
      let api='AIzaSyD3sIw78SH-ZEx3lJMiFlz804pozD2GlLU';

const fetch=async(api)=>{
   try{
      const result=await fetch(`${api}`);
   const data=await result.json();
   console.log(data);
   return data;
   }catch(error){
     console.log(error);
     return error;
   }
}


      fetch(api)
      .then((result)=>{
        console.log(result);
      })
      .catch((err)=>{
        console.log(err);
      })


  return (
    <div>
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h className='text-green-200'>WEATHER APP </h>
          <br></br>

          <label >ENTER LOCATION</label>
          <br></br>
         
          <input 
          type='text'
            placeholder='loaction'
            value={place}
            onChange={(e)=>setPlace(e.target.value)}
          />
          <br></br>
          <button
          className='bg-blue-500'
            onClick={findWeatherDetails}
           > CHECK</button>
      </div> */}














    </div>
  )
}

export default WeatherForcast
