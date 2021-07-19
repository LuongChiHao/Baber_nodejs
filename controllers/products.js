const productServices = require('../services/product');

exports.get = function getAllProducts(){
    return productServices.get();
}

exports.getOne = function(id){
    return productServices.getOne(id);
}

exports.delete = (id) =>{
    productServices.delete(id);
}