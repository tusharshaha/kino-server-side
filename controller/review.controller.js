const database = require("../utils/dbConnect");

const reviewCollections = database.collection('reviews');

module.exports.getAllProductReview = async (req, res) => {
    const reviews = await reviewCollections.find({}).toArray();
    res.status(200).send({
        success: true,
        messages: "success",
        data: reviews
    });
}
module.exports.sendProductReview = async (req, res) => {
    const review = req.body;
    const result = await reviewCollections.insertOne(review);
    res.status(200).json({
        success: true,
        messages: "success",
        data: result
    });
}