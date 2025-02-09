const express=require("express")
const router=express.Router();
const appointment=require("../../storage Schema/Appointment");

router.post("/appointment",async(req,res)=>{
      
  try{
      const {time,date,appointment_duration,doctor_id,user_id}=req.body;
      
    if(!time){
        return res.status(400).json({
            success:false,
            message:"Please Choose the Time of Appoint"
        })
    }
     if(!date){
        return res.status(400).json({
            success:false,
            message:"Please Choose the date of Appoint"
        })
    }

    //  let generateRandomId = () => Math.random().toString(36).substr(2, 4).toUpperCase();

    //   console.log(generateRandomId());


    // let check_randomid_Alias=await appointment.findOne({generateRandomId});
    // while(check_randomid_Alias){
    //     generateRandomId = () => Math.random().toString(36).substr(2, 4).toUpperCase();
    //     check_randomid_Alias=await appointment.findOne({generateRandomId});
    // }
   const generateRandomId="ABCD"
    const NewAppointment=await appointment(
        {
            appointment_id:generateRandomId,
            doctor_id:doctor_id,
            user_id:user_id,
            time:time,
            date:date,
            appointment_duration:appointment_duration,
            // appointment_status,
            // appointment_conclusion
        });

        await NewAppointment.save();
        return res.status(400).json({
            success:true,
            message:"Appointment Successfully created "
        })

  }catch(error){
      console.log("error is ",error);
        return res.status(400).json({
            success:false,
            message:"internal issue"
        })
  }

})

module.exports=router;