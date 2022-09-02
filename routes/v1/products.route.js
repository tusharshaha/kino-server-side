const express = require("express");
const database = require("../../utils/dbConnect");
const router = express.Router();

const productCollections = database.collection('products');

// get products
router.get('/', async (req, res) => {
    const products = await productCollections.find({}).toArray();
    res.status(200).send({
        success: true,
        messages: "success",
        data: products
    });
})

module.exports = router;