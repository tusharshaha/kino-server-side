const database = require("../utils/dbConnect");

const reviewCollections = database.collection('reviews');

module.exports.getAllProductReview = async (req, res) => {
    const reviews = await reviewCollections.find({}).toArray();
    res.send(reviews);
}
module.exports.sendProductReview = async (req, res) => {
    const review = req.body;
    const result = await reviewCollections.insertOne(review);
    res.json(result);
}