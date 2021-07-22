const productServices = require('../services/product');

exports.get = () => {
    return productServices.get();
}

exports.getOne = function(id){
    return productServices.getOne(id);
}

exports.delete = (id) =>{
    productServices.delete(id);
}
exports.update = (params, body) =>{
    let {id} = params;
    let {name, cost, date, brand} = body;
    productServices.update({id, name, cost, date, brand});
}   
