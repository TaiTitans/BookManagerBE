const express = require('express')
const router = express.Router()
const BooksController = require('../controllers/BooksController')
const { authorizeCustomer, authorizeStaff } = require('../middleware/checkingPermission');
const authenticateToken = require('../middleware/authenticateToken');
//create books

router.post('/create',authenticateToken, authorizeStaff, BooksController.create)
router.put('/update',authenticateToken, authorizeStaff,  BooksController.update)
router.delete('/delete/:_id',authenticateToken, authorizeStaff, BooksController.delete)
router.get('/getOne', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
      BooksController.getOne(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
router.get('/getAll', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
      BooksController.getAll(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
module.exports = router