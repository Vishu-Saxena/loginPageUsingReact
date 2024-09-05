const express = require('express');
const router = express.Router();
const user = require('../modals/UserSchema');


router.use(express.json());

router.get("/getUserDetails" ,async(req ,res)=>{
    try {
        const userDetails = await user.find({}).sort( { "createdAt": -1 } );
        if(userDetails.length){
            return res.status(200).json({"message" : userDetails , 'success' : true})
        }

        return res.status(200).json({"message" : "No data available" , 'success' : false})
        
    } catch (error) {

        console.log("error in fetching user details.");
        console.log(error);
        res.status(404).json({"message" : "No data available" , success : false});
        
    }
} );

module.exports = router;