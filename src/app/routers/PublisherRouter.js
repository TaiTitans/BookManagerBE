const express = require('express')
const router = express.Router()
const PublisherController = require('../controllers/PublisherController')
const { authorizeCustomer, authorizeStaff } = require('../middleware/checkingPermission');
const authenticateToken = require('../middleware/authenticateToken');
//create nxb
router.post('/create',authenticateToken, authorizeStaff,PublisherController.create)
router.delete('/delete',authenticateToken,authorizeStaff, PublisherController.delete)
router.get('/getAll',authenticateToken,authorizeStaff, PublisherController.getAll)


module.exports = router