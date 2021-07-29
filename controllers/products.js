const productServices = require('../services/product');

exports.get =async () => {
    return await productServices.get();
}

exports.getOne = function(id){
    console.log(productServices.getOne(id));
    return productServices.getOne(id);
}

exports.delete =async (id) =>{
   await  productServices.delete(id);
}
exports.update = (params, body) =>{
    let {id} = params;
    let {name, price, des, brand, img} = body;
    productServices.update({id, name, price, des, brand, img});
}   

exports.insert = async (body) =>{
    let {name, price, des, brand, img} = body;
    await productServices.insert({name, price, des, brand, img});
}
