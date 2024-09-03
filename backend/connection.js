const mongoose = require('mongoose');
// const dotenv = require("dotenv");
// dotenv.config();
const dbConnect = async()=>{
    try {
        const con = await mongoose.connect("mongodb+srv://vishusaxena3110:YQ6VkkcfRKXsAezE@cluster0.ces9ye1.mongodb.net/practice");
        console.log("connected to database succefully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;