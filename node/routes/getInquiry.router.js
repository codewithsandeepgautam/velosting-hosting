const express = require('express')
const { ServerInquiryController } = require('../controllers/getInquiry.controller')
const router = express.Router()
router.post('/', ServerInquiryController)
module.exports = router;