const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/product');
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET requests to /products'
  });
})

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    stockID : req.body.stockID,
    productName : req.body.productName,
    expirationDate : req.body.expirationDate,
    dateAdded : req.body.dateAdded,
    Quantity : req.body.Quantity,
    basePrice : req.body.basePrice,
    sellingPrice : req.body.sellingPrice
  });
  product
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Handling POST requests to /products',
    createdProduct: product
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
  .exec()
  .then(doc => {
    console.log("From database", doc);
    res.status(200).json({doc})
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
      message: 'Updated product!'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
      message: 'Deleted product!',
    });
});

module.exports = router;
