const mongoose=require('mongoose');

const Appointment=new mongoose.Schema({
    appointment_id:{
        type:String,
        required:true
    },
    doctor_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    time:{
        type:String,
        requied:true
    },
    date:{
        type:Date,
        required:true
    },
    appointment_duration:{
        type:Number,  
        required:false,
        default:30
    },
    appointment_status:{
         type:String,
         enum:['Scheduled', 'Completed', 'Cancelled', 'Pending'],
         default:'Scheduled'
    },
    appointment_conclusion:{
           type:String,
           default:''
    }
})

module.exports=mongoose.model("Appointment",Appointment);