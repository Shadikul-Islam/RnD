const express = require('express');
const redis = require('redis');

// Create a Redis client
const client = redis.createClient();

// Connect to Redis
client.on('connect', () => {
  console.log('Connected to Redis');
});

// Create an Express app
const app = express();

// Use JSON middleware
app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  // Get data from form
  const { name, email } = req.body;

  // Store data in Redis
  client.set(name, email);

  // Send response
  res.send('Data stored in Redis');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server started on port ${PORT}');
});

