var express = require('express');
var router = express.Router();
const authenticate = require("../middle/authenfication");


router.get('/', [authenticate.checkLogin, function (req, res, next){
    res.render('thongke', {title: "Thống kê"});
}])

module.exports = router;