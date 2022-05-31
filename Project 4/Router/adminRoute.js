const express = require('express');
const adminRouting = express.Router();
const adminController = require('../Controller/adminController');

adminRouting.get('/addproducts', adminController.addProduct);

adminRouting.post('/postdata', adminController.postdata);

adminRouting.get('/view_products', adminController.viewProduct);

adminRouting.get('/edit/:pid', adminController.editProduct);

adminRouting.post('/postEditedValue', adminController.editPostData);

adminRouting.get('/delete/:pid', adminController.deleteProduct);

adminRouting.post('/postDeletedValue', adminController.deletePostData);

module.exports = adminRouting;