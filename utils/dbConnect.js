const { MongoClient } = require('mongodb');
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2xl13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
(async () => { await client.connect(); })()
const database = client.db('Kino');

module.exports = database;