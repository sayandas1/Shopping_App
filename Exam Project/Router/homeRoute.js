const express = require('express');
const homeRouting = express.Router();
const homeController = require('../Controller/homeController');

homeRouting.get('/home', homeController.homePage);

module.exports = homeRouting;