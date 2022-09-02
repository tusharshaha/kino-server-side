const database = require("../utils/dbConnect");

const orderCollections = database.collection("orders");

module.exports.sendOrder = async (req, res) => {
    const order = req.body;
    const result = await orderCollections.insertOne(order);
    res.status(200).json({
        success: true,
        messages: "success",
        data: result
    })

}
module.exports.getUserOrder = async (req, res) => {
    const query = { userEmail: req.params.email };
    const result = await orderCollections.find(query).toArray();
    res.status(200).send({
        success: true,
        messages: "success",
        data: result
    })
}