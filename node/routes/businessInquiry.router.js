const express = require('express')
const { BusinessInquiryController } = require('../controllers/businessInquiry.controller')
const router = express.Router()
router.post('/', BusinessInquiryController)
module.exports = router;