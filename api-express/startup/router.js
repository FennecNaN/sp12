const express = require('express')

// const logger = require('../middleware/logger.js')

const morgan = require('morgan')

module.exports = function (app) {
	app.use(express.json()) // Parsear el body en json para disponerlo en req.body
	// app.use(logger)

	app.use(morgan('dev'))

	app.use('/api/v1/tasks', require('../routes/tasks.js'))
	app.use('/api/v1/users', require('../routes/users.js'))

	app.get('/ping', (req, res) => {
		res.json({ message: 'pong' })
	})
}
