const Subscription = require('./../models/subscription')

const postSubscription = (req, res) => {
	const subscription = new Subscription(req.body)

	subscription
		.save()
		.then(result => {
			res.status(201).json(result)
		})
		.catch(err => {
			res.status(500).json({ err })
		})
}

module.exports = {
	postSubscription,
}
