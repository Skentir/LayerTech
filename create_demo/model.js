const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let productSchema = new Schema(
  {
    _id : { type: String } ,
    stockID : { type: String },
    productName : { type: String },
    expirationDate : { type: String },
    dateAdded : { type: String },
    Quantity : { type: Number },
    basePrice : { type: Number },
    sellingPrice : { type: Number }
  },
  { collection: "Products" }
);

module.exports = mongoose.model("productSchema", productSchema);
