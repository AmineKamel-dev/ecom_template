const express = require('express');
const router = express.router();
const orderController = require('../controllers/orderController');


//Protected Routes 
router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);




router.patch('/:id/status/:status', orderController.updateStatus);
//NOTE: move to cart ?
router.post('/:cartID/user/:userID',orderController.createOrder)