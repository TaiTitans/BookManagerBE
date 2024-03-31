const express = require('express')
const router = express.Router()
const PublisherController = require('../controllers/PublisherController')
//create nxb
router.post('/create', PublisherController.create)

module.exports = router