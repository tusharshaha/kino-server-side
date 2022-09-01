const express = require('express');
const cors = require('cors');
const productsRoute = require('./routes/v1/products.route');
const reviewsRoute = require("./routes/v1/review.route");
const ordersRoute = require("./routes/v1/orders.route");

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
// products route
app.use("/api/v1/products", productsRoute);
// product review route
app.use("/api/v1/review", reviewsRoute);
// order route
app.use("/api/v1/order", ordersRoute);

app.get('/', (req, res) => {
    res.send('server hitting')
})

// send response for undefined route
app.all("*", (req, res)=>{
    res.send("No Route Found!!!");
})
// connect with port
app.listen(port, () => {
    console.log(`listening from http://localhost:${port} `)
})