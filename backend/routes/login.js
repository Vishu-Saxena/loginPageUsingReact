const express = require('express');
const router  = express.Router();
const user = require("../modals/UserSchema");
const {ComaparePassword} = require('../hashing/PasswordHashing');
const jwt = require('jsonwebtoken');

router.use(express.json());

router.post("/login" , async(req ,res)=>{
    try {

        const {email , password} = req.body;
        if(!email || !password){
            return res.status(200).json({"message" : "incomplete info" , "success" : false});
        }
        const ExistinguUser = await user.findOne({email});
        
        // console.log(ExistinguUser);
        if(ExistinguUser){
            const passwordMatch = await ComaparePassword(password , ExistinguUser.password);
            if(passwordMatch){
                const data = {
                    userId : ExistinguUser._id
                }
                const Token = jwt.sign(data , "THISISASECRETEKEY");
                return res.status(200).json({"message" : "Logged in " , "success" : true , Token});
                
            }
            return res.status(200).json({"message" : "Invalid credentials " , "success" : false})
        }
        return res.status(200).json({"message" : "user doesnot exist" , "success" : false})
        
    } catch (error) {
        console.log("error in login route");
        console.log(error);
        return res.json({"message" : "user not logged in successfully" , "success" : false})
    }
})

module.exports= router;

