#!/usr/bin/node

const { dbClient } = require('../utils/db');

const { redisClient } = require('../utils/redis');

class AppController {
  static async getStatus(req, res) {
    const redisStatus = await redisClient.isAlive();
    const dbStatus = await dbClient.isAlive();
    res.status(200).json({ redis: redisStatus, db: dbStatus });
  }

  static async getStats(req, res) {
    const nbUsers = await dbClient.nbUsers();
    const nbFiles = await dbClient.nbFiles();
    res.status(200).json({ users: nbUsers, files: nbFiles });
  }

  catch(err) {
    console.error('AppController.getStats', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = AppController;
