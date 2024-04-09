const express = require('express')
const router = express.Router()
const BorrowBooksController = require('../controllers/BorrowBooksController')
const { authorizeCustomer, authorizeStaff } = require('../middleware/checkingPermission');
const authenticateToken = require('../middleware/authenticateToken');
//create muon sach
router.post('/create', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
      BorrowBooksController.create(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
router.delete('/delete/:_id', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
      BorrowBooksController.delete(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });
router.get('/getAll', authenticateToken, (req, res, next) => {
    if (req.user.MaDocGia || req.user.MSNV) {
      BorrowBooksController.getAll(req, res, next);
    } else {
      return res.status(403).json({ message: 'Forbidden' });
    }
  });

module.exports = router