var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
const jwt = require('jsonwebtoken');
var authentication = require('../middle/authenfication');

/* GET index page. */
// http://localhost:3000
router.get('/', [authentication.checkLogin],function (req, res, next) {
      res.redirect('/products');
});

router.get('/login', function(req, res, next){
  res.render("index");
})


/* GET login page. */
// http://localhost:3000
router.post('/', function (req, res, next) {
  const { username, password } = req.body;
  const check = userController.login(username, password);
  console.log(check);
  if (check) {
    const acess_token = jwt.sign({ id: 1, username: 'admin' }, process.env.JWT_SECRET_KEY);
    req.session.acess_token = acess_token;
    res.redirect('/products');
  }
  else {
    res.redirect('/');
  }
});

/*
  Get Logout
*/

router.get("/logout", function(req, res, next){
    req.session.destroy(function(err){
        res.redirect('/login');
    })
});


module.exports = router;
