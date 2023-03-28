const express = require("express");
const router = express.Router()
const bodyParse = require("body-parser")
const bcrypt = require("bcrypt")
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const User = require("../schemas/user.js")

router.post("/register",async(req,res)=>{
    const {email,password}={...req.body}
    console.log(email,password)
    //checking the missing fields
    if(email==="" || password===""){
        res.status(400).json({message:"please enter all the fields"})
    }
    //validating the password
    if(password.length<6||password.length>12){
        res.status(400).json({
            message:"password length should be greater than 6 and lessthan 12"
        })
    }
    //validating the email
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        res.status(400).json({
            message:"please enter a valid email"
        })
    }
    //checking for existing user
    const doesUserExists =await  User.findOne({email});
    if(doesUserExists){
        return res.status(400).json({
            message:"User Already Exists"
        })
    }
    //hashing the password
    try{
        const hashpassword = await bcrypt.hash(password,12)
        const newUser = new User({email,password:hashpassword})
        const result = await newUser.save()
        console.log(result)
        res.send(result)
    }
    catch(err){
        console.log(err.message)
    }
    
    // console.log("ok");
    
})

module.exports=router



