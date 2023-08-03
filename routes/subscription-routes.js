const express = require('express')
const { postSubscription } = require('./../controllers/subscription-controller')

const router = express.Router()

router.post('/subscriptions', postSubscription)

module.exports = router
