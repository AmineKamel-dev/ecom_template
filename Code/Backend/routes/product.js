const express = require('express');
const router = express.Router();
const productController=require('../controllers/productController.js');

//NORMAL paths
router.get('/',productController.getAllProducts);
router.get('/:id',productController.getProductById);

//PROTECTED paths
//TODO: add protection Mechaism

// remove item from listing
router.delete('/:id',productController.delistProduct);
//add item to listing
router.post('/',express.json(),productController.enlistProduct);
// update item 
router.patch('/:id',express.json(),productController.updateProduct);