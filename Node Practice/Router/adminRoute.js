const express = require('express');
const form_router = express.Router();
const form_controller = require('../Controller/adminController');

form_router.get('/add_products', form_controller.getFormData)

form_router.post('/postdata', form_controller.postFormData)

form_router.get('/viewadmin_products', form_controller.getFormDetails)


module.exports = form_router;