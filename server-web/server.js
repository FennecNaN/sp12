const express = require('express')

const multer = require('multer')

const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000

app.use(express.static('public'))

// app.use(express.urlencoded({ extended: true }))

app.post('/pets', upload.single('image'), (req, res) => {
	console.log(req.body)

	console.log(req.file)

	res.send('JE')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
