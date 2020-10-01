const mongoose = require("mongoose");
const express = require("express");
const app = express();
const productSchema = require("./model");
const router = express.Router();
const port = 4000;

var uri = "mongodb://localhost:27017/kennel";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use("/", router);
router.route("/insertdata").post(function(req, res) {});

var data = [
  {
    _id : "" ,
    stockID : "",
    productName : "",
    expirationDate : "",
    dateAdded : "",
    Quantity : 0,
    basePrice : 0,
    sellingPrice : 0
  },
  {
    _id : "" ,
    stockID : "",
    productName : "",
    expirationDate : "",
    dateAdded : "",
    Quantity : 0,
    basePrice : 0,
    sellingPrice : 0
  },
  {
    _id : "" ,
    stockID : "",
    productName : "",
    expirationDate : "",
    dateAdded : "",
    Quantity : 0,
    basePrice : 0,
    sellingPrice : 0
  }
];

productSchema.insertMany(data, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    res.send(result);
  }
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
