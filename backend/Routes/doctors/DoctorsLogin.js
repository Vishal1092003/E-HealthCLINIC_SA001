const express=require("express");
const router=express.Router();
const doctors=require("../../storage Schema/Docters");
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

router.post("/doctors/login",async(req,res)=>{
   try{
           const {DoctorUserName,DoctorPasscode}=req.body;
           console.log("username ",DoctorUserName);
           console.log("passcode ",DoctorPasscode);


            if(!DoctorUserName || !DoctorPasscode){
          return res.status(400).json({
              success:false,
              message:"no DocterUserName or no DoctorPasscode"
          })
          }
          const checkuser=await doctors.findOne({DoctorUserName});
          if(!checkuser){
              return res.status(400).json({
              success:false,
              message:"wrong username"
          })}
          const passwordMatch=await bcrypt.compare(DoctorPasscode,checkuser.DoctorPasscode);
            if(!passwordMatch){
               return res.status(400).json({
              success:false,
              message:"wrong password"
               })
              }
       const payload={
          DoctorUserName,
          DoctorPasscode
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
    
  
              
  
              return res.status(200).json({
                  success:true,
                  message:"doctor logged in successfully",
                  user:checkuser,
                  token:jwttoken
              })
          
      }catch(error){
         console.log("system error")
    return res.status(400).json({
              success:false,
              message:"cant able to login"
               })
      }
})
module.exports=router;