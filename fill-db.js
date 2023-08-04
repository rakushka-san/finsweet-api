require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')

const Author = require('./models/author')
const Category = require('./models/category')
const Contact = require('./models/contact')
const Post = require('./models/post')
const Subscription = require('./models/subscription')
const Testimonial = require('./models/testimonial')

async function importAll() {
	await importData(Author, authors)
	await importData(Category, categories)
	await importData(Contact, contacts)
	await importData(Post, posts)
	await importData(Subscription, subscriptions)
	await importData(Testimonial, testimonials)
}

async function importData(model, data) {
	data.forEach(record => {
		for (field in record) {
			if (Object.keys(record[field]).includes('$oid')) {
				record[field] = record[field]['$oid']
			}

			if (Object.keys(record[field]).includes('$date')) {
				record[field] = record[field]['$date']
			}
		}
	})

	model
		.insertMany(data)
		.then(res => {
			console.log('Succesfully imported collection')
		})
		.catch(err => {
			console.log('Error importing collection: ', err)
		})
}

function parseFile(filename) {
	return JSON.parse(
		fs.readFileSync(path.join(__dirname, '_db-collections', filename), 'utf-8')
	)
}

const authors = parseFile('finsweet.authors.json')
const categories = parseFile('finsweet.categories.json')
const contacts = parseFile('finsweet.contacts.json')
const posts = parseFile('finsweet.posts.json')
const subscriptions = parseFile('finsweet.subscriptions.json')
const testimonials = parseFile('finsweet.testimonials.json')

const { DB_HOST, DB_PORT, DB_NAME } = process.env
const MONGO_URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log('Ready to import collections')
		importAll()
	})
	.catch(err =>
		console.log(`Error connecting to DB by URL ${MONGO_URL}: ${err}`)
	)
