const mongoose = require('mongoose')

const Schema = mongoose.Schema

const testimonialSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	author: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	authorName: {
		type: String,
		required: true,
	},
	authorPhoto: {
		type: String,
		required: true,
	},
	authorRegion: {
		type: String,
		required: true,
	},
})

const Testimonial = mongoose.model('Testimonial', testimonialSchema)

module.exports = Testimonial
