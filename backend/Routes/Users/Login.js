const express=require("express");
const router=express.Router();
const user=require("../../storage Schema/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");
const cookie=require("cookie");


router.post("/login",async(req,res)=>{
    try{
         const {username,password}=req.body;
          if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"no username or no passowrd"
        })
        }
        const checkuser=await user.findOne({username});
        if(!checkuser){
            return res.status(400).json({
            success:false,
            message:"wrong username"
        })}
        const passwordMatch=await bcrypt.compare(password,checkuser.password);
          if(!passwordMatch){
             return res.status(400).json({
            success:false,
            message:"wrong password"
             })
            }
     const payload={
        username,
        password
     }
     const secret_key=process.env.secret_key;
    const options={
        expiresIn:'1h'
    }
    const jwttoken=await jwt.sign(payload,secret_key,options);
     
    // res.cookie(
    //     "jwtToken",
    //     jwttoken,
    //     {
    //      httpOnly:true,
    //      secure:true
    //     }
    // )
    // res.send("jwt token stroed in cookie")

            

            return res.status(200).json({
                success:true,
                message:"user logged in successfully",
                user:checkuser,
                token:jwttoken
            })
        
    }catch(error){
  return res.status(400).json({
            success:false,
            message:error
             })
    }
})
module.exports=router;