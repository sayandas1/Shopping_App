const express = require('express');
const adminRouting = express.Router();
const adminController = require('../Controller/adminController');
const Auth_check = require('../middle-ware/isAuth');

adminRouting.get('/additems', adminController.addItem);

adminRouting.post('/postdata', adminController.postdata);

adminRouting.get('/view_items', Auth_check,adminController.viewItem);

adminRouting.get('/details/:pid', Auth_check,adminController.viewItemDetails);

module.exports = adminRouting;