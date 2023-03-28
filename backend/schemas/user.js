const mongoose = require("mongoose");
const objectId = mongoose.objectId;

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,min:6,max:12}
},{timestamps:true})

const user = mongoose.model("User",userSchema)


module.exports = user