const express = require("express");
const router = express.Router();
const {PasswordHashing} = require('../hashing/PasswordHashing');
const user = require('../modals/UserSchema');
router.use(express.json());

router.post('/register' , async(req ,res)=>{
    try {
       const {name , email , password} = await req.body;
       console.log(email , name , password);
       if(!email || !name || !password){
            return res.status(422).json({"message" : "Incomplete data" , "success" : false})
       };

       const userExist = await user.findOne({ email});
       if(userExist){
         return res.status(200).json({"message" : "user already registered with this email" , "success" : false})
       }

       const securePassword = await PasswordHashing(password);

       const newUser = await user({Name : name , email : email , password : securePassword});
       const result = await newUser.save();

       return res.status(200).json({"message" : "user registered successfully" , "success" : true})
   
    //    res.send(req.body);
        
    } catch (error) {
        console.log("error in register route");
        console.log(error);
        return res.json({"message" : "user not registered successfully" , "success" : false})
        
    }
})

module.exports = router;