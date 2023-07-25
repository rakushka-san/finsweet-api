const Post = require('./../models/post')

const getPosts = (req, res) => {
	Post.find()
		.then(posts => {
			res.status(200).json(posts)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

const getPost = (req, res) => {
	Post.findById(req.params.id)
		.then(posts => {
			res.status(200).json(posts)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	getPosts,
	getPost,
}
