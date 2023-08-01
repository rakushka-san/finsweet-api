const Category = require('./../models/category')

const getCategories = (req, res) => {
	Category.find()
		.then(categories => {
			res.status(200).json(categories)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

const getCategory = (req, res) => {
	Category.findById(req.params.id)
		.then(category => {
			res.status(200).json(category)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	getCategories,
	getCategory,
}
