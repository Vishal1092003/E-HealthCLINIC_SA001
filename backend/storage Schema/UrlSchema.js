const mongoose=require('mongoose');

const urlschema=new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    finalUrl:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('urlschema',urlschema);