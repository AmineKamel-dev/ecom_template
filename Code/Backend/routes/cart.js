const express=require('express');
const router=express.Router();
const cartController= require('../controllers/cartController');

//public routes
//create Cart first time
router.post('/',cartController.createCart);
//view cart
router.get('/:id',cartController.getCart);
//delete cart
router.delete('/:id',cartController.deleteCart);
//delete item from cart 
router.delete('/:cartId/items/:itemId',cartController.deleteItem);
//add item to cart
router.patch('/:cartId/items/:itemId',cartController.addItem);