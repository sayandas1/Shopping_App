const express = require('express');
const authRouting = express.Router();
const authController = require('../Controller/authController');

authRouting.get('/registration', authController.registrationForm);

authRouting.post('/postregistration', authController.postRegistrationData);

authRouting.get('/login', authController.loginForm);

authRouting.post('/postLogin', authController.postLoginData);

authRouting.get('/logout', authController.logoutForm);

authRouting.get('/forget_password', authController.forgetPassword);

authRouting.post('/post_forget_password', authController.postForgetPassword);

authRouting.get('/SetNewPassword/:id', authController.setPassGet);

authRouting.post('/postNewPassword', authController.setNewPwd);

module.exports = authRouting;