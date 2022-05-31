const express = require('express');
const userRouting = express.Router();
const userController = require('../Controller/userController');
const Auth_check = require('../middle-ware/isAuth');

userRouting.get('/viewuser_products', userController.viewUserProduct);
userRouting.get('/details/:pid', Auth_check,userController.viewUserProductDetails);
userRouting.post('/search', userController.searchProduct);
userRouting.post('/addToCart', userController.addtoCart);
userRouting.get('/add_to_cart', userController.getCartPage);
userRouting.get('/cartDelete/:cart_id', userController.cartDelete);

module.exports = userRouting;