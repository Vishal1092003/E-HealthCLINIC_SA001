const express=require('express');
const router=express.Router();

const doctors=require("../../storage Schema/Docters");


router.get("/doctors/doctordetails",async(req,res)=>{
    try{
        const AllDoctors=await doctors.find({});
        return res.status(200).json({
           success:true,
           message:"all doctors details fetched",
           doctors:AllDoctors

        })

    }catch(error){
        console.log("error ",error);
        return res.status(400).json({
            success:false,
            message:"server issue"
        })
    }
})


router.get("/doctors/:_id",async(req,res)=>{
   try{
    const {_id}=req.params;
        const Doctor=await doctors.findOne({_id});
        return res.status(200).json({
           success:true,
           message:"Details of doctor with given doctor_id",
           Doctor:Doctor

        })

    }catch(error){
        console.log("error ",error);
        return res.status(400).json({
            success:false,
            message:"server issue"
        })
    }
})

module.exports=router;