const express = require('express')
const { getAuthors, getAuthor } = require('./../controllers/author-controller')

const router = express.Router()

router.get('/authors', getAuthors)
router.get('/authors/:id', getAuthor)

module.exports = router
