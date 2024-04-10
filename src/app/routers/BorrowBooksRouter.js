const express = require('express')
const router = express.Router()
const BorrowBooksController = require('../controllers/BorrowBooksController')
//create muon sach
router.post('/create', BorrowBooksController.create)
router.post('/createBorrowBook', BorrowBooksController.createBorrowBook)
router.delete('/delete/:_id', BorrowBooksController.delete)
router.get('/getAll', BorrowBooksController.getAll)
router.get('/getAllWithCustomer/:MaDocGia', BorrowBooksController.getAllWithCustomer)


module.exports = router