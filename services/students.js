const students = [
    {id: 1, name: 'Lương Chí Hào ', mobile: '0123456789', classId: 1, dob: '2000-06-29', avarta: ''},
    {id: 2, name: 'Lương Chí Hào A', mobile: '0123456789', classId: 1, dob: '2000-06-29', avarta: ''},
    {id: 3, name: 'Lương Chí Hào B', mobile: '0123456789', classId: 1, dob: '2000-06-29', avarta: ''},
    {id: 4, name: 'Lương Chí Hào C', mobile: '0123456789', classId: 1, dob: '2000-06-29', avarta: ''}
]

exports.get = function getAllStudents(){
    return students;
}

