const express = require('express');
const userform_router = express.Router();
const userform_controller = require('../Controller/userController');

userform_router.get('/viewuser_products', userform_controller.getuserFormDetails);


module.exports = userform_router;