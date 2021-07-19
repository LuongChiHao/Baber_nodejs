var express = require('express');
var router = express.Router();
var studentsController = require('../controllers/students');
var authentication = require('../middle/authenfication');

// middleware


// Get students list
router.get('/',[authentication.checkLogin],function(req, res, next) {
    const students = studentsController.get();
    res.render('students', { students: students });
  });



  module.exports = router;

