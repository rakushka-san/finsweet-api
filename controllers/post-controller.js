const Post = require('./../models/post')

const getPosts = (req, res) => {
	const author = req.query.author
	const category = req.query.category
	const limit = req.query.limit
	const skip = req.query.skip
	const filter = {}

	if (author) filter.author = author
	if (category) filter.category = category

	Post.find(filter)
		.limit(limit ? limit : 0)
		.skip(skip ? skip : 0)
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
