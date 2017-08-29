const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// User api
app.get('/user', (req, res) => {
  res.send('Hi Bob!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
