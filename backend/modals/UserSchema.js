const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
}, {timestamps : true})

const UserDetail = mongoose.model('userDetails', userSchema);
module.exports = UserDetail;