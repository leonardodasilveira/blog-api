const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const mongoClient = require('./mongo')

const app = express()
mongoClient()

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


module.exports = app