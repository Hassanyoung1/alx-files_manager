#!/usr/bin/node

const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000; // Make sure 'process' is lowercase
const routes = require('./routes/index');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
