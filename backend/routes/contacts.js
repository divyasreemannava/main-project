const express = require("express") //including express package
const router = express.Router() //creates instance router
const contact = require("../schemas/data")
const users = require("../schemas/user")

//Get all the contact details
router.get("/:userId", async (req, res)=>{
    try{
        const listcontacts = await contact.find({ userID: req.params.userID })
        return res.status(200).json({
            contacts : listcontacts
        })
    }catch(e){
        return res.status(400).json({
            message:e.message
        });
    }
})




//Export router
module.exports = router