const express = require('express');
const userRouting = express.Router();
const userController = require('../Controller/userController');

userRouting.get('/add_data', userController.formView);

userRouting.post('/post_data', userController.postData);

userRouting.get('/view_data', userController.viewForm);

userRouting.post('/search', userController.searchCity);

module.exports = userRouting;