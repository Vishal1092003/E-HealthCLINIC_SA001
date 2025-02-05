const express=require('express');
const router=express.Router();
const user=require("../../storage Schema/User");
const bcrypt=require("bcrypt")
// const { default: SignUp } = require('../../src/pages/SignUp');

router.post("/signup",async(req,res)=>{
    try{
        const {username,password}=req.body;
    if(!username || !password){
        return res.status(400).json({
            success:false,
            message:"no username or no passowrd"
        })
    }
    const isSame=await user.findOne({username});
    console.log("issame user : ",isSame);
    if(isSame){
         return res.status(400).json({
            success:false,
            message:"Username Already Exists"
        })
    }
     const bcryptPassword=await bcrypt.hash(password,12);
    const newuser=new user({username,password:bcryptPassword});
    await newuser.save();

    return res.status(200).json({
        success:true,
        message:"User successfull Signed Up"
    })
    }catch(error){
         return res.status(400).json({
            success:false,
            message:"system issuse"
        })
    }

})

module.exports=router;