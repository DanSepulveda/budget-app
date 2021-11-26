const express = require('express')
require('dotenv').config()
require('./config/database')
// const router = require('./routes/index')

const app = express()
app.use(express.static('assets'))

app.listen(4000, () => console.log('Server listening on port 4000'))