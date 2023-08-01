const express = require('express')
const {
	getCategories,
	getCategory,
} = require('./../controllers/category-controller')

const router = express.Router()

router.get('/categories', getCategories)
router.get('/categories/:id', getCategory)

module.exports = router
