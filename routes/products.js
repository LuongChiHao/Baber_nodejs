var express = require('express');
var router = express.Router();
const authenticate = require("../middle/authenfication");
var productsController = require('../controllers/products');
var brandController = require('../controllers/brand');


// Get students list
router.get('/', [authenticate.checkLogin],function(req, res, next) {
    const products = productsController.get();
    const brand = brandController.get();
    res.render('products', { products: products, brand: brand });
  });

// getOneProduct
router.get('/edit/:id', [authenticate.checkLogin], function(req, res, next){
  const {id} = req.params; 
  const product = productsController.getOne(id);
  const brand = brandController.get();
  res.render('productDetail', {product: product, brand: brand});
})

// Insert
router.post('/insert', [authenticate.checkLogin], function(req, res, next){
  let{body} = req;
  productsController.insert(body);
  res.redirect('/products');
})

// Update
router.post('/update/:id', [authenticate.checkLogin], function(req, res, next){
  let{params, body} = req;
  productsController.update(params, body);
  res.redirect('/products');
})

// Delete
router.delete('/delete/:id', [authenticate.checkLogin], function(req, res, next){
  const {id} = req.params; 
  productsController.delete(id);
  
  // Redirect 
  res.json({result: true});
})


  module.exports = router;

