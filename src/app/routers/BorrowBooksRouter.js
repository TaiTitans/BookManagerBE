const express = require('express')
const router = express.Router()
const BorrowBooksController = require('../controllers/BorrowBooksController')
//create muon sach
router.post('/create', BorrowBooksController.create)
router.delete('/delete', BorrowBooksController.delete)
module.exports = router