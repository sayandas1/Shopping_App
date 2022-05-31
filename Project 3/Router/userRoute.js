const express = require('express');
const userRouting = express.Router();
const userController = require('../Controller/userController');

userRouting.get('/view_user_products', userController.viewUserProduct);

module.exports = userRouting;