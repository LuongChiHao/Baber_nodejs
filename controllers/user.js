const userServices = require('../services/user');






exports.login = async function login(username, password) {
    const user =await userServices.login(username);
    if (!user)
    {
        return null;
    }

    // decode password

    if(user.password != password)
    {
        return null;
    }
    return true;    
}