const { MongoClient } = require('mongodb')
const express = require('express');
const cors = require('cors')
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2xl13.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('Kino');
        const productCollections = database.collection('products');
        const reviewCollections = database.collection('reviews');
        const orderCollections = database.collection("orders");
        // get products
        app.get('/products', async (req, res) => {
            const products = await productCollections.find({}).toArray();
            res.send(products);
        })
        // get product reviews
        app.get('/review', async (req, res) => {
            const reviews = await reviewCollections.find({}).toArray();
            res.send(reviews);
        })
        // post product review
        app.post('/review', async (req, res) => {
            const review = req.body;
            const result = await reviewCollections.insertOne(review);
            res.json(result);
        })
        // post user order
        app.post("/order", async (req, res) => {
            const order = req.body;
            const result = await orderCollections.insertOne(order);
            res.json(result)
        })
        app.get("/orders/:email", async (req, res) => {
            const query = { userEmail : req.params.email };
            const result = await orderCollections.find(query).toArray();
            res.send(result)
        })
    } finally {
        // await client.close()
    }
}
run().catch(console.dir)
app.get('/', (req, res) => {
    res.send('server hitting')
})
// connect with port
app.listen(port, () => {
    console.log(`listening from http://localhost:${port} `)
})