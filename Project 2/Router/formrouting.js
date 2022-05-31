const express = require('express');
const form_router = express.Router();
const form_controller = require('../Controller/form_controller')


form_router.get('/viewform', form_controller.getFormData)
form_router.post('/postvalue', form_controller.postFormData)
form_router.get('/formDetails', form_controller.getFormDetails)


module.exports = form_router;