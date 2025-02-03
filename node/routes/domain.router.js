const express = require('express')
const {getDomain} = require('../controllers/domain.controller')
const router = express.Router()
router.post('/', getDomain)
module.exports= router;