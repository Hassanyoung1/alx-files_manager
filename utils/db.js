const { MongoClient } = require('mongodb')

class DBClient {
    constructor() {
        const host = process.env.DB_HOST || 'localhost
        const port = process.env.DB_PORT || 27017
        const database = process.env.DB_DATABASE || 'file_manager'
        const url = `mongodb://${host}:${port}/${database}`
        this.client = new MongoClient(url, { useUnifiedTopology: true })
        this.connect();
    }
    isAlive() {
        return this.client.isConnected();
    }
    async connect() {
        await this.client.connect();
    }
    async nbUsers() {
        const users = this.client.db('file_manager').collection('users');
        return users.countDocuments();
    }
    async nbFiles() {
        const files = this.client.db('file_manager').collection('files');
        return files.countDocuments();
    }

}
module.exports = DBClient;
