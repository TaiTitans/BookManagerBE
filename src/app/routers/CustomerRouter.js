const express = require('express');
const router = express.Router();
const CustomerController = require('../controllers/CustomerController')
const { authorizeCustomer, authorizeStaff } = require('../middleware/checkingPermission');
const authenticateToken = require('../middleware/authenticateToken');
//create customer
router.post('/dangky', CustomerController.dangky)
router.get('/get', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
     CustomerController.getOne(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
router.get('/getAll',authenticateToken,authorizeStaff ,CustomerController.getAll)
router.post('/dangnhap',authenticateToken,authorizeStaff,CustomerController.dangnhap)
router.delete('/delete/:_id',authenticateToken,authorizeStaff,CustomerController.delete)


module.exports = router