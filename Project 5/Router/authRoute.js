const express = require('express');
const authRouting = express.Router();
const authController = require('../Controller/authController');

authRouting.get('/registration', authController.registrationForm);

authRouting.post('/postregistration', authController.postRegistrationData);

authRouting.get('/login', authController.loginForm);

authRouting.post('/postLogin', authController.postLoginData);

authRouting.get('/logout', authController.logoutForm);

module.exports = authRouting;