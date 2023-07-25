const Author = require('./../models/author')

const getAuthors = (req, res) => {
	Author.find()
		.then(authors => {
			res.status(200).json(authors)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

const getAuthor = (req, res) => {
	Author.findById(req.params.id)
		.then(authors => {
			res.status(200).json(authors)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	getAuthors,
	getAuthor,
}
