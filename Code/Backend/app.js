
const express = require('express');

const app= express();
const product=require('./routes/product');
const cart = require('./routes/cart');

app.use('/products',product);
app.use('/cart',cart);

module.exports= app;