import React, { useState } from 'react'

function Signin() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState(""); 
    
    const checkuser=async()=>{
         try{
       const response=await fetch(`http://localhost:8000/login`,{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            }),
            // credentials:'include'
           })
           .then(res=>res.json())
           .then((result)=>{
            const token=result.token;
            // const user_id=result.user._id;
            console.log("result is ",result.token);
            console.log("token is ",token);
            // console.log("user id is ",user_id);
           })
           .catch((error)=>{
            console.log("error is ",error);
           })

        //  const data= await response.json();
        //  console.log("token is ",data.token);



         }catch(error){
             console.log("error is ",error);
         }
           

        
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
     onClick={checkuser}
     >
        submit
     </button>
            
    </div>
  )
}

export default Signin

