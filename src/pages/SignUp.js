import React from 'react'
import { useState } from 'react';
function SignUp() {
const [username, setusername] = useState();
const [password, setpassword] = useState();

  const submit=()=>{
      const resposne=fetch(`http://localhost:8000/signup`,{
       "method":"post",
       headers:{
           "Content-Type":"Application/json"
       },
       body:JSON.stringify({
        username:username,
        password:password
       })
      })
      .then((res)=>res.json())
      .then((result)=>{
        console.log("result is ",result);
      })
      
      .catch((error)=>{
        console.log("error is ",error);
      })

    //   const data= response.json();
    //   console.log("data is ",data);

  }

  return (
    <div>
    <h1>SignUp</h1>
     <div>
         <label>username : </label>
            <input
                placeholder='username'
                value={username}
                type='text'
                onChange={(e)=>setusername(e.target.value)}
            />
     </div>
     <div>
         <lable>password </lable>
            <input
            placeholder='password'
            type='text'
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            />
     </div>
     <button
     onClick={submit}
     >
        submit
     </button>
            
    </div>
  )


}

export default SignUp
