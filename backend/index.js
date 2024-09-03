const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./connection');
const registerRout = require('./routes/register');
const loginRout = require('./routes/login');
const userDetailsROute = require('./routes/details');
const cors = require("cors");
const app = express();

app.use(cors());
app.use( "/api/auth" , registerRout);
app.use( "/api/auth" , loginRout);
app.use( "/api/auth" , userDetailsROute);
app.use(express.json());
dbConnect(); //connecting function to database;
let PORT = 5000;
app.listen(PORT , ()=>{
    console.log(`server running on port no ${PORT}`);
});