const express = require('express')
const { getPosts, getPost } = require('./../controllers/post-controller')

const router = express.Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)

module.exports = router
