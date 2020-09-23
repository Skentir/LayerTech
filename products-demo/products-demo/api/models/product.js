const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  stockID : String,
  productName : String,
  expirationDate : Date,
  dateAdded : Date,
  Quantity : Number,
  basePrice : Number,
  sellingPrice : Number
});

module.exports = mongoose.model('Product', productSchema);
