// server.js - Many thanks to the Mentors for assisting here and with the router logic and understanding
//without actually given the code away.

const express = require('express');
const mongoose = require('mongoose');
const db = require('./dbConfig/dbConfig');
const cors = require('cors'); // Import the cors middleware
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Use the cors middleware to handle Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Import your new router
const allRouters = require('./routers/allRouters')

app.use('/api/cars', allRouters )


// Base server route
app.get('/', (req, res) => {
  res.send('Welcome, the server is active.');
});

// Listening on port 8080.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
