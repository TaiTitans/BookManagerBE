const express = require('express')
const router = express.Router()
const BooksController = require('../controllers/BooksController')

//create books

router.post('/create', BooksController.create)
router.put('/update', BooksController.update)
router.delete('/delete/:_id', BooksController.delete)
router.get('/getOne', BooksController.getOne)
router.get('/getAll', BooksController.getAll)
module.exports = router