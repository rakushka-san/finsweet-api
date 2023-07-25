const Testimonial = require('./../models/testimonial')

const getTestimonials = (req, res) => {
	Testimonial.find()
		.then(testimonials => {
			res.status(200).json(testimonials)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	getTestimonials,
}
