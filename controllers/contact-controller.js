const Contact = require('./../models/contact')

const postContact = (req, res) => {
	const contact = new Contact(req.body)

	contact
		.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	postContact,
}
