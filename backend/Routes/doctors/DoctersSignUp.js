const express=require('express');
const router=express.Router();
const bcrypt=require("bcrypt")
const doctors=require("../../storage Schema/Docters");

router.post("/doctors/Signup",async (req,res)=>{
 try{
    const {DoctorUserName,DoctorName,DoctorPhoto,Description,Sex,DoctorPasscode,Workingdays,phone,DoctorEmail}=req.body;
    
    if(!DoctorUserName || !DoctorName || !Description|| !Sex|| !DoctorPasscode || !Workingdays || !phone||!DoctorEmail ){
        return res.status(400).json({
            success:false,
            message:"Doctors Need To Fill All The Details "
        })
    }
    const isSame=await doctors.findOne({DoctorUserName});
    console.log("issame user : ",isSame);
    if(isSame){
         return res.status(400).json({
            success:false,
            message:"Username Already Exists"
        })
    }
     const bcryptPassword=await bcrypt.hash(DoctorPasscode,12);
    const newuser=new doctors(
        {
            DoctorUserName,DoctorName,DoctorPhoto,Description,Sex,DoctorPasscode:bcryptPassword,Workingdays,phone,DoctorEmail

        },
    );
    await newuser.save();

    return res.status(200).json({
        success:true,
        message:"User successfull Signed Up",
        user:newuser
    })
    }catch(error){
        console.log("error ",error);
         return res.status(400).json({
            success:false,
            message:"system issuse"
        })
    }
})

module.exports=router;