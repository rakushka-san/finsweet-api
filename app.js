require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const postRoutes = require('./routes/post-routes')
const authorRoutes = require('./routes/author-routes')
const categoryRoutes = require('./routes/category-routes')
const testimonialRoutes = require('./routes/testimonial-routes')

const app = express()

app.use(postRoutes)
app.use(authorRoutes)
app.use(categoryRoutes)
app.use(testimonialRoutes)

mongoose
	.connect(process.env.DB_URL)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(`Error connecting to DB: ${err}`))

app.listen(process.env.PORT, err => {
	err
		? console.log(err)
		: console.log(`Server started at port ${process.env.PORT}`)
})
