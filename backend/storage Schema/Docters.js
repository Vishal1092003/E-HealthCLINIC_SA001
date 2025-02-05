const mongoose=require('mongoose');

const DocterSchema=new mongoose.Schema({
    DoctorUserName:{
        type:String,
        required:true
    },
    DoctorName:{
        type:String,
        required:true
    },
    DoctorPhoto:{
         type:String,
        required:false
    },
    Description:{
        type:String,
        required:true
    },
    Sex:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },
    DoctorPasscode:{
        type:String,
        required:true
    },
    Workingdays:{
        type:[String],
        enum:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required:true
    },
    phone:{
        type:Number,
        required:false
    },
    DoctorEmail:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("doctors",DocterSchema);