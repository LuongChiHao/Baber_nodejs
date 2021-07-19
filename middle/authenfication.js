const jwt = require('jsonwebtoken');

exports.checkLogin = function (req, res, next) {
    const {session} = req;
    if (session) {
        const { acess_token } = req.session;
        if (acess_token) {
            jwt.verify(acess_token,
                process.env.JWT_SECRET_KEY,
                function (err, decode) {
                    if (err) {
                        res.redirect('/login');
                    }
                    else {
                        req.isLoggedIn= true;
                        next();
                    }

                });
        }
        else {
            res.redirect('/login');
        }
    }
    else 
    {
        res.redirect('/login');
    }
}