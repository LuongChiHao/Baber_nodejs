const productServices = require('../services/product');

exports.get = () => {
    return productServices.get();
}

exports.getOne = function(id){
    console.log(productServices.getOne(id));
    return productServices.getOne(id);
}

exports.delete = (id) =>{
    productServices.delete(id);
}
exports.update = (params, body) =>{
    let {id} = params;
    let {name, cost, date, brand, img} = body;
    productServices.update({id, name, cost, date, brand, img});
}   

exports.insert = (body) =>{
    const uuid =  () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      } 
    let id = uuid();
    let {name, cost, date, brand, img} = body;
    console.log("Link", img, "+", name);
    productServices.insert({id, name, cost, date, brand, img});
}
