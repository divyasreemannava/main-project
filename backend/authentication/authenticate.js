const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')

const User = require("../schemas/user.js")
const secret = "DNL@3"
module.exports = (req,res,next)=>{
    // const authHeaders = req.headers.authorization;
    const authHeaders = req.cookies
    // console.log(authHeaders)
    if(authHeaders){
        const token = req.cookies.jwt;
        console.log("token" +token)
        jwt.verify(token,secret,async(err,payload)=>{
            try{
                if(err){
                    return res.status(401).json({
                        message:"unauthorised!..."
                    })
                }
            req.user = payload    
            next()
            }
            catch(err){
                return res.json({
                    message:err.message
                })
            }
        })
    }
 }

