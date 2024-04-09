const express = require('express')
const router = express.Router()
const PublisherController = require('../controllers/PublisherController')
//create nxb
router.post('/create', PublisherController.create)
router.delete('/delete', PublisherController.delete)
router.get('/getAll', PublisherController.getAll)


module.exports = router