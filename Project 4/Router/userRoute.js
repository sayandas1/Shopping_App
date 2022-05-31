const express = require('express');
const userRouting = express.Router();
const userController = require('../Controller/userController');

userRouting.get('/viewuser_products', userController.viewUserProduct);
userRouting.get('/details/:pid', userController.viewUserProductDetails);
userRouting.post('/search', userController.searchProduct);

module.exports = userRouting;