#!/usr/bin/env node

const sha1 = require('sha1');
const dbClient = require('../utils/db');

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Missing email' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Missing password' });
    }

    // Check if email already exists
    const db = dbClient.client.db();
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Already exist' });
    }

    // Hash the password
    const hashedPassword = sha1(password);

    // Save the user
    const newUser = { email, password: hashedPassword };
    const result = await db.collection('users').insertOne(newUser);

    return res.status(201).json({ id: result.insertedId, email });
  }
}

module.exports = UsersController;
