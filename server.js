#!/usr/bin/node

const express = require("express");
const router = require("./routes/index");

const server = express();
const PORT = process.env.PORT || 5270

server.use(express.json());
server.use(router);

server.listen(PORT, () =>
  console.log(`The server is running on port: ${PORT}`)
);
