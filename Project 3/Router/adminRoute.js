const express = require('express');
const adminRouting = express.Router();
const adminController = require('../Controller/adminController');

adminRouting.get('/addproducts', adminController.addProduct);

adminRouting.post('/postdata', adminController.postdata);

adminRouting.get('/view_products', adminController.viewProduct);

module.exports = adminRouting;