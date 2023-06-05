const express = require('express')
const app = express()
const path = require('path')
const config = require('./config/config')
const PORT = config.PORT
const morgan = require('morgan')
const bodyParser = require('body-parser')

// log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// Set view Engine
app.set('view engine', 'ejs')

// load assets
app.use('/css', express.static(path.join(__dirname, 'assets/css')))
app.use('/img', express.static(path.join(__dirname, 'assets/img')))
app.use('/js', express.static(path.join(__dirname, 'assets/js')))

// laod routes routes

app.use('/', require('./server/routes/indexRoutes'))

app.listen(PORT, () => {
  console.log(`listening in ${PORT}`)
})
