const express = require('express');
const router = express.Router();
const readerController = require('../controllers/ReaderController');

//POST CREATE READER
router.post('/create',readerController.create);

module.exports = router;