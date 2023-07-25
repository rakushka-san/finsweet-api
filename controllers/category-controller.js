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

module.exports = {
	getCategories,
}
