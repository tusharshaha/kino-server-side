const express = require("express");
const ordersController = require("../../controller/orders.controller");

const router = express.Router();

// send a order
router.post("/", ordersController.sendOrder)
// get order by user email 
router.get("/:email", ordersController.getUserOrder)

module.exports = router