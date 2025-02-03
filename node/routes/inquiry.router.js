const express = require('express')
const { inquiryController } = require('../controllers/inquiry.controller')
const router = express.Router()
router.post('/', inquiryController)
module.exports = router;