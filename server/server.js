const express = require('express')

const {
	logger,
	hasBodyValidation,
	petSchemaValidation,
} = require('./middleware.js')

const app = express()

app.use(express.json())

app.use(logger)

const pets = [
	{ name: 'Lassie', type: 'dog' },
	{ name: 'Felix', type: 'cat' },
	{ name: 'Garfield', type: 'cat' },
	{ name: 'Peter', type: 'rabbit' },
]

app.post(
	'/pets',
	hasBodyValidation,
	petSchemaValidation,
	(req, res) => {
		const newPet = { ...req.body }

		pets.push(newPet)
		res.status(201).json(newPet)
	}
)

app.get('/pets', (req, res) => {
	res.status(200).json(pets)
})

app.listen(3000, () => {
	console.log(
		`Middleware exercise server running on http://localhost:3000`
	)
})
