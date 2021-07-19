const userServices = require('../services/user');






exports.login = function login(username, password) {
    const user = userServices.login(username);
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