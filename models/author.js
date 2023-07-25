const mongoose = require('mongoose')

const Schema = mongoose.Schema

const authorSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	photoSrc: {
		type: String,
		required: true,
	},
	position: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	blogDescription: {
		type: String,
		required: true,
	},
	region: {
		type: String,
		required: true,
	},
	socials: {
		type: {
			facebook: String,
			twitter: String,
			instagram: String,
			linkedIn: String,
		},
		required: true,
	},
})

const Author = mongoose.model('Author', authorSchema)

module.exports = Author
