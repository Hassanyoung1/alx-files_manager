#!/usr/bin/node

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const routes = require('./routes/index');

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Define your routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

