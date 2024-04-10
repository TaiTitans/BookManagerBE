const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')

//create customer
router.post('/dangky', CustomerController.dangky)
router.get('/get', CustomerController.getOne)
router.get('/getAll', CustomerController.getAll)
router.post('/dangnhap',CustomerController.dangnhap)
router.delete('/delete/:_id',CustomerController.delete)


module.exports = router