var mongoose = require('mongoose');
const productModel = require('../models/products');

const {validationResult} = require('express-validator');

exports.addProduct = function(req, res) {
  const {productName, expirationDate, dateBought, quantity, basePrice, sellingPrice} = req.body;

  const newProduct = {
    productName : productName,
    expirationDate : expirationDate,
    dateBought : dateBought,
    quantity : quantity,
    basePrice : basePrice,
    sellingPrice : sellingPrice
  };

  productModel.create(newProduct, function(err, product){
    if (err) {
      console.log(err);
      req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.redirect('/inventory');
    } else {
      req.flash("success_msg", 'Product added!');
      res.redirect('/inventory');
    }
  })
};

exports.getItemDetails = function(req,res) 
{
  console.log("Inside get item details");
  var itemID = mongoose.Types.ObjectId(req.params.id);

  productModel.findById(itemID)
    .exec(function(err,results){
      if (err)
        res.send(err);
      else if (!results)
        res.send(err);
      else
        //var data = JSON.parse(JSON.stringify(results))
        res.send(results);
    });
} 

exports.getProducts = function(req, res) {
  productModel.find({})
    .exec(function(err, results){
      if (err)
        res.send(err);
      else if (!results)
        res.send(err);
      else
        var prod = JSON.parse(JSON.stringify(results))
        var params = {
          layout: 'main',
          products: prod
        }
        //res.send(params)
        res.render('inventory',params);
    })
}

exports.updateItem = function(req,res) {

  productModel.findById(req.params.id)
    .exec(function(err,results){
      if (err) 
        //req.flash('error_msg', 'Something happened! Please try again.');
        res.send(err);
      else if (!results)
        res.send(err)
      else    
        console.log(JSON.parse(JSON.stringify(results)));
        //res.render('inventory',results);
    }
  )
};
