var express = require('express');
var router = express.Router();
const authenticate = require("../middle/authenfication");


router.get('/', [authenticate.checkLogin, function (req, res, next){
    res.render('lichhen', {title: "Lịch hẹn"});
}])

module.exports = router;