const express = require('express')
const app = express()
const parser = require('body-parser')

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

const museumController = require('./controllers/museums')

app.use('/api/museums/', museumController)

app.set("port", process.env.PORT || 3001)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
})