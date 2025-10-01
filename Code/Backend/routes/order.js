const express = require('express');
const router = express.router();
const orderController = require('../controllers/orderController');


//PUBLIC routes
router.get('/', orderController.getAllOrders);

router.get('/:id', orderController.getOrderById);


//Protected Route

router.patch('/:id/status/:status', orderController.updateStatus);
//NOTE: move to cart ?
router.post('/:cartID/user/:userID',orderController.createOrder)