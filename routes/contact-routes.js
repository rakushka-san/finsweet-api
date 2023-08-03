const express = require('express')
const { postContact } = require('./../controllers/contact-controller')

const router = express.Router()

router.post('/contacts', postContact)

module.exports = router
