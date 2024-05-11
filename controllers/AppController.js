#!/usr/bin/node

const dbClient = require('../utils/db');
const redisClient = require('../utils/redis');

class AppController {
  static async getStatus(req, res) {
    try {
      const redisStatus = redisClient.isAlive(); // Assuming isAlive is synchronous
      const dbStatus = dbClient.isAlive(); // Assuming isAlive is synchronous
      res.status(200).json({ redis: redisStatus, db: dbStatus });
    } catch (err) {
      console.error('AppController.getStatus', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  static async getStats(req, res) {
    try {
      const nbUsers = await dbClient.nbUsers();
      const nbFiles = await dbClient.nbFiles();
      res.status(200).json({ users: nbUsers, files: nbFiles });
    } catch (err) {
      console.error('AppController.getStats', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = AppController;
