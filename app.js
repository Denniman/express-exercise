const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/index')

const port = process.env.PORT || 8800

app.use(bodyParser.json())

app.use('/items', router)

app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})