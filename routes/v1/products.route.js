const express = require("express");
const database = require("../../utils/dbConnect");
const router = express.Router();

const productCollections = database.collection('products');

// get products
router.get('/', async (req, res) => {
    const products = await productCollections.find({}).toArray();
    res.send(products);
})

module.exports = router;