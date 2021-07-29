const userModel = require('../models/user_model');



// Select * from users where username = ?
exports.login = async function login(username){
    // select username password from users where username = username
    const user = await userModel.findOne({username: username}, 'username password');
    console.log("TK",user, username);
    return user;
}