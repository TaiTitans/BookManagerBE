const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')

//create customer
router.post('/create', CustomerController.create)

module.exports = router