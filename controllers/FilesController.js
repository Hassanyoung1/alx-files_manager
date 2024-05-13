const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const DBClient = require('../utils/db');  // Adjusted import
const redisClient = require('../utils/redis');

class FilesController {
  static async postUpload(req, res) {
    const token = req.headers['x-token'];
    const userId = await redisClient.get(`auth_${token}`);

    if (!userId) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    const {
      name, type, parentId = '0', isPublic = false, data,
    } = req.body;

    if (!name || !type) {
      return res.status(400).send({ error: 'Missing name or type' });
    }

    if (['file', 'image'].includes(type) && !data) {
      return res.status(400).send({ error: 'Missing data' });
    }

    const db = new DBClient(); // Adjusted instantiation
    if (!db.isAlive()) {
      return res.status(500).send({ error: 'Database connection error' });
    }

    const parent = await db.getUserById(parentId);
    if (parentId !== '0' && (!parent || parent.type !== 'folder')) {
      return res.status(400).send({ error: 'Parent not found or is not a folder' });
    }

    let filePath;
    if (type === 'file' || type === 'image') {
      const buffer = Buffer.from(data, 'base64');
      const filename = uuidv4();
      const storagePath = process.env.FOLDER_PATH || '/tmp/files_manager';
      if (!fs.existsSync(storagePath)) {
        fs.mkdirSync(storagePath, { recursive: true });
      }
      filePath = path.join(storagePath, filename);
      fs.writeFileSync(filePath, buffer);
    }

    const newFile = {
      userId,
      name,
      type,
      parentId,
      isPublic,
      localPath: filePath,
    };

    const result = await db.createFile(newFile);

    return res.status(201).send({
      id: result.insertedId,
      userId,
      name,
      type,
      isPublic,
      parentId,
    });
  }
}

module.exports = FilesController;
