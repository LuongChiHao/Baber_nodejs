// var brand = [
//     {id: 0, name:"LG"},
//     {id: 1, name:"Samsung"},
//     {id: 2, name:"APPLE"},
//     {id: 3, name:"ASUS"},
// ]

const brandModel = require('../models/brand_model');

// select * from brand
exports.get = async function(){
    return await brandModel.find();
}