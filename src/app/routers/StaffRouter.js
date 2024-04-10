const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/StaffController');

//POST CREATE READER
router.post('/create', StaffController.create);
router.post('/dangnhap', StaffController.dangnhap);
router.get('/getAll', StaffController.getAll);
router.delete('/delete/:_id', StaffController.delete);



module.exports = router;