var express = require('express');
var router = express.Router();
const authenticate = require("../middle/authenfication");
var productsController = require('../controllers/products');
var brandController = require('../controllers/brand');
var upload = require('../middle/upload');

// Get students list
router.get('/', [authenticate.checkLogin], async function(req, res, next) {
    const products = await productsController.get();
    const brand = await brandController.get();
    console.log(">>>>>>>>>>", brand, products);
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
router.post('/insert', [authenticate.checkLogin], async function(req, res, next){
  let{body} = req;
 await productsController.insert(body);
  res.redirect('/products');
})

// Update
router.post('/update/:id', [authenticate.checkLogin, upload.single('img')], function(req, res, next){
  let{params, body, file} = req;
  if(file){
    let img = 'http://192.168.9.106:3000/images/'+file.originalname;
    body = {...body, img}
  }
  productsController.update(params, body);
  res.redirect('/products');
})

// Delete
router.delete('/delete/:id', [authenticate.checkLogin],async function(req, res, next){
  const {id} = req.params; 
  await productsController.delete(id);
  res.json({result: true});
})


  module.exports = router;

