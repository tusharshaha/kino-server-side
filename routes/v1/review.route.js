const express = require("express");
const reviewControllers = require("../../controller/review.controller");
const router = express.Router();

router.route("/")
    // get all product review
    .get(reviewControllers.getAllProductReview)
    // send a product review
    .post(reviewControllers.sendProductReview);

module.exports = router;