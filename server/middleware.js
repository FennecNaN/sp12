const { isEmpty } = require('lodash')

function logger(req, res, next) {
	const { method, path, body } = req

	console.log(method, path)

	if (!isEmpty(body)) console.log(body)

	next()
}

function hasBodyValidation(req, res, next) {
	if (isEmpty(req.body))
		return res.status(422).json({ error: 'body not found' })

	next()
}

function petSchemaValidation(req, res, next) {
	const pet = req.body

	for (let requiredParameter of ['name', 'type']) {
		if (!pet[requiredParameter]) {
			return res.status(422).send({
				error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.`,
			})
		}
	}

	next()
}

module.exports = {
	logger,
	hasBodyValidation,
	petSchemaValidation,
}
