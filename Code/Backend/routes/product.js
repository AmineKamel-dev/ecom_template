const express = require('express');
const router = express.Router();
const productController=require('../controllers/productController.js');

//NORMAL paths
router.get('/',productController.getAll);
router.get('/:id',productController.getID);

//PROTECTED paths
//TODO: add protection Mechaism

// remove item from listing
router.delete('/:id',productController.delistItem);
//add item to listing
router.post('/',productController.enlistItem);
// update item 
router.patch('/:id',productController.updateItem);