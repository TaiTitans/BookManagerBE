const express = require('express')
const router = express.Router()
const BooksController = require('../controllers/BooksController')

//create books

router.post('/create', BooksController.create)

module.exports = router