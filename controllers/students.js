const studentsServices = require('../services/students');






exports.get = function getAllStudents() {
    return studentsServices.get();    
}