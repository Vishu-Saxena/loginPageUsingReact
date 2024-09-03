const express = require('express');
const router = express.Router();
const user = require('../modals/UserSchema');


router.use(express.json());

router.get("/getUserDetails" ,async(req ,res)=>{
    try {
        const userDetails = await user.find({});
        if(userDetails){
            console.log(userDetails);
        }
    } catch (error) {

        console.log("error in fetching user details.");
        console.log(error);
        
    }
} );

module.exports = router;