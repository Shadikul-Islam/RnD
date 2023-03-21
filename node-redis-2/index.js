const express = require('express')
const redis = require('redis')

const app = express()
const client = redis.createClient({
  url: 'redis://redis:6379'
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.post('/submit', async (req, res) => {
//   const { name, age } = req.body
//   await client.set('name', name)
//   await client.set('age', age)
//   res.send('Data stored in Redis!')
// })

app.post('/submit', async (req, res) => {
  const { name, age } = req.body
  try {
    await client.set('name', name)
    await client.set('age', age)
    res.send('Data stored in Redis!')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error storing data in Redis')
  }
})

app.get('/data', async (req, res) => {
  const name = await client.get('name')
  const age = await client.get('age')
  res.json({ name, age })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
