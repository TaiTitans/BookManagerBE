const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')

//create customer
router.post('/create', CustomerController.create)
router.get('/get', CustomerController.getOne)
router.post('/getAll', CustomerController.getAll)

module.exports = router