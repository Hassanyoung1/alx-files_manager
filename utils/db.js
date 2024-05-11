#!/usr/bin/node

const { MongoClient } = require('mongodb');
const mongo = require('mongodb');
const { pwdHashed } = require('./utils');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}/`;

    this.client = new MongoClient(url, {
      useUnifiedTopology: true,
    });

    this.database = database;
    this.db = null;
    this.connect();
  }

  connect() {
    // Connect to the MongoDB client and assign the db instance
    this.client.connect()
      .then(() => {
        this.db = this.client.db(this.database);
      })
      .catch((err) => {
        console.error('Connection to MongoDB failed:', err);
      });
  }

  isAlive() {
    // Check if the db instance is available
    return !!this.db;
  }

  async nbUsers() {
    // Return the number of documents in the 'users' collection
    try {
      return await this.db.collection('users').countDocuments();
    } catch (err) {
      console.error('Failed to count documents in users collection:', err);
      throw err;
    }
  }

  async nbFiles() {
    // Return the number of documents in the 'files' collection
    try {
      return await this.db.collection('files').countDocuments();
    } catch (err) {
      console.error('Failed to count documents in files collection:', err);
      throw err;
    }
  }
}

const dbClient = new DBClient();
module.exports = dbClient;
