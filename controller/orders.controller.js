const database = require("../utils/dbConnect");

const orderCollections = database.collection("orders");

module.exports.sendOrder = async (req, res) => {
    const order = req.body;
    const result = await orderCollections.insertOne(order);
    res.json(result)
}
module.exports.getUserOrder = async (req, res) => {
    const query = { userEmail: req.params.email };
    const result = await orderCollections.find(query).toArray();
    res.send(result)
}