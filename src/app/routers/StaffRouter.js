const express = require('express');
const router = express.Router();
const StaffController = require('../controllers/StaffController');

//POST CREATE READER
router.post('/create', StaffController.create);

module.exports = router;