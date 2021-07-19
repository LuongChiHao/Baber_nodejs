var express = require('express');
var router = express.Router();
const authenticate = require("../middle/authenfication");
var productsController = require('../controllers/products')


// Get students list
router.get('/', [authenticate.checkLogin],function(req, res, next) {
    const products = productsController.get();
    res.render('products', { products: products });
  });

// getOneProduct
router.get('/edit/:id', [authenticate.checkLogin], function(req, res, next){
  const {id} = req.params; 
  const product = productsController.getOne(id);
  console.log(id);
  console.log(product);
   res.render('productDetail', {product: product});
})

// Delete
router.delete('/delete/:id', [authenticate.checkLogin], function(req, res, next){
  const {id} = req.params; 
  productsController.delete(id);
  
  // Redirect 
  res.json({result: true});
})


  module.exports = router;

