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

const postPost = (req, res) => {
	const post = new Post(req.body)

	post
		.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

const deletePost = (req, res) => {
	Post.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(204).json(result)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

const updatePost = (req, res) => {
	Post.findByIdAndUpdate(req.params.id, req.body)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	getPosts,
	getPost,
	postPost,
	deletePost,
	updatePost,
}
