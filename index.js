const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

// const exhibitController = require('./controllers/exhibits')
// const reviewController = require('./controllers/reviews')
const museumController = require('./controllers/museums')

app.use('/api/museums/', museumController)
// app.use('/api/reviews/', reviewController)
// app.use('/api/exhibits/', exhibitController)

app.listen(4000, () => console.log('Server running on port 4000!'))