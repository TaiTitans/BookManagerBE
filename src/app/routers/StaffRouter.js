const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/StaffController');
const { authorizeCustomer, authorizeStaff } = require('../middleware/checkingPermission');
const authenticateToken = require('../middleware/authenticateToken');
//POST CREATE READER
router.post('/create',authenticateToken,authorizeStaff, StaffController.create);
router.post('/dangnhap',authenticateToken,authorizeStaff, StaffController.dangnhap);
router.get('/getAll',authenticateToken,authorizeStaff, StaffController.getAll);
router.delete('/delete/:_id',authenticateToken,authorizeStaff, StaffController.delete);



module.exports = router;