require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

const postRoutes = require('./routes/post-routes')
const authorRoutes = require('./routes/author-routes')
const categoryRoutes = require('./routes/category-routes')
const testimonialRoutes = require('./routes/testimonial-routes')
const contactRoutes = require('./routes/contact-routes')
const subscriptionRoutes = require('./routes/subscription-routes')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(postRoutes)
app.use(authorRoutes)
app.use(categoryRoutes)
app.use(testimonialRoutes)
app.use(contactRoutes)
app.use(subscriptionRoutes)

const { DB_HOST, DB_PORT, DB_NAME } = process.env

const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose
	.connect(MONGO_URL)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err =>
		console.log(`Error connecting to DB by URL ${MONGO_URL}: ${err}`)
	)

app.listen(process.env.PORT, err => {
	err
		? console.log(err)
		: console.log(`Server started at port ${process.env.PORT}`)
})
