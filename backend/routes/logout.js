const express = require("express");
const router = express.Router();


router.get("/logout",(req,res)=>{
    //  req.cookies.jwt = "asdjfh";
     res.cookie('jwt', 'loggedout')
     res.status(200).json({
        message:"successfully logged out"
     })
     
     console.log("cookies"+req.cookies.jwt)
})

module.exports = router