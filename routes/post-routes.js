const express = require('express')
const {
	getPosts,
	getPost,
	postPost,
	deletePost,
	updatePost,
} = require('./../controllers/post-controller')

const router = express.Router()

router.get('/posts', getPosts)
router.get('/posts/:id', getPost)
router.post('/posts', postPost)
router.delete('/posts/:id', deletePost)
router.patch('/posts/:id', updatePost)

module.exports = router
