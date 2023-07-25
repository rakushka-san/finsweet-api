const express = require('express')
const { getTestimonials } = require('./../controllers/testimonial-controller')

const router = express.Router()

router.get('/testimonials', getTestimonials)

module.exports = router
