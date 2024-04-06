const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')

//create customer
router.post('/dangky', CustomerController.dangky)
router.get('/get', CustomerController.getOne)
router.post('/getAll', CustomerController.getAll)
router.get('/dangnhap',CustomerController.dangnhap)

module.exports = router