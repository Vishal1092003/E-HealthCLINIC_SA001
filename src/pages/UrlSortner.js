import React from 'react'
import { useState } from 'react';

function UrlSortner() {
  const [url,seturl] = useState();
  const [changeTo, setchangeTo] = useState();
  
  
const AddurlDetails=async()=>{
  try{
const response=await fetch('http://localhost:8000/posting/posturl',{
    method:"POST",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify({
      url:url,
      finalUrl:changeTo
    })
  }).then((result)=>{
    console.log("result ",result);
  })
  .catch((error)=>{
    console.log("error is ",error);
  })

   const data=await response.json();
   console.log("data is  ", data);

  }catch(error){
   console.error('Error:', error);
  }
  
}



  return (
    <div>
    <div>
<lable>
         give the actual url
    </lable>
     <input
       value={url}
       placeholder='url'
       type='text'
       onChange={(e)=>seturl(e.target.value)}
     />  
    </div>
    <div>
<lable>
         changeTo
    </lable>
     <input
       value={changeTo}
       placeholder='changeTo'
       type='text'
       onChange={(e)=>setchangeTo(e.target.value)}
     />  
    </div>
    
     <button  
    onClick={
      // console.log(url)
      AddurlDetails
      }
    >check url</button>
    </div>
  )
}

export default UrlSortner
