const express = require('express')
const app = express()
const parser = require('body-parser')
app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

// const exhibitsController = require('./controllers/exhibits')
// const reviewsController = require('./controllers/reviews')
// const museumsController = require('./controllers/museums')

// app.use('/api/museum/', museumController)
// app.use('/api/review/', reviewController)
// app.use('/api/exhibit/', exhibitController)

app.listen(4000, () => console.log('Server running on port 4000!'))