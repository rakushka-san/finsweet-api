const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	author: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	imgSrc: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post
