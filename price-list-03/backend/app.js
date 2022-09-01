const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const { getAllFruit, getAllVegetables, addFruit } = require('./database')

app.use(cors())
app.use(express.json())

app.get('/store/fruit', (req, res) => {
  console.log(`${new Date()} - INFO - Called fruit /store/fruit`);
  res.json(getAllFruit())
})

app.get('/store/vegetables', (req, res) => {
  console.log(`${new Date()} - INFO - Called vegetables /store/vegetables`);
  res.json(getAllVegetables())
})

app.get('/', (req, res) => {
  console.log(`${new Date()} - INFO - Called /`);
  res.redirect('/store/fruit')
})

app.post('/store/fruit', (req, res) => {
  console.log(`${new Date()} - INFO - Called fruit POST /store/fruit`);
  addFruit(req.body);
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
