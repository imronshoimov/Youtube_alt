const express = require('express')
const cookie = require('cookie-parser')
const fileupload = require('express-fileupload')
const app = express()
const path = require('path')

const { host, PORT } = require('./config')

app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use( cookie() )
app.use(fileupload())

const modules = require('./modules')
app.use(modules)

app.listen(PORT, () => console.log(`http://${host}:${PORT}`))