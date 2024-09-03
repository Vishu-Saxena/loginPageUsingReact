const bcrypt = require('bcryptjs');

const PasswordHashing = async(passwrd)=>{
    const hashedPasswrd = await bcrypt.hash(passwrd , 12);
    return hashedPasswrd;
}

const ComaparePassword = async(userPassword , StoredPasswrd)=>{
    const match = await bcrypt.compare(userPassword , StoredPasswrd);
    return match;
}

module.exports = {PasswordHashing , ComaparePassword};