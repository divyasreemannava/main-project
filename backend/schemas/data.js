const mongoose = require("mongoose");
const objectId = mongoose.objectId;


const dataSchema = new mongoose.Schema({
    name:{type:String,required:true},
    designation :{type:String,required:true},
    company : {type:String,required:true},
    industry:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    country:{type:String,required:true},
    userId:{type:String}
},
{timestamps:true})

const contacts = mongoose.model("Contacts",dataSchema)

module.exports = contacts