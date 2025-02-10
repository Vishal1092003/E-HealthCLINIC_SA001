const nodemailer= require("nodemailer");
const express=require('express');
const router=express.Router();

router.post("/sendmail",async(req,res)=>{
    try{
  // connect with smtp
  const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "codewithme2615@gmail.com",
    pass: "rvvy lagl bmga vhif",
  },
})

for(let i=0;i<1;i++){
var info=await transporter.sendMail({
     from: '"👻" <codewithme2615@gmail.com>', // sender address
    to: "2022ugcs035@nitjsr.ac.in", // list of receivers
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
})
}
  return res.status(200).json({
    success:true,
    message:"Mail sent successfully",
    info
  })
    }catch(error){
             console.log("error is ",error)
  return res.status(400).json({
    success:false,
    message:"server issue",
  })
    }
})

module.exports=router;