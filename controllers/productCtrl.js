var mongoose = require('mongoose');

const productModel = require('../models/products');

const {validationResult} = require('express-validator');

exports.addProduct = function(req, res) {
  const errors = validationResult(req);

    if(errors.isEmpty()){
      const {productName, expirationDate, dateBought, quantity, basePrice, sellingPrice, location} = req.body;

      const newProduct = {
        productName : productName,
        expirationDate : expirationDate,
        dateBought : dateBought,
        quantity : quantity,
        basePrice : basePrice,
        sellingPrice : sellingPrice,
        location : location
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
    } else {
      const messages = errors.array().map((item) => item.msg);

      req.flash('error_msg', messages.join(' '));
      res.redirect('/inventory')
    }
  };

exports.getItemDetails = function(req,res)
{
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

  productModel.findByIdAndUpdate({_id:req.params.id},
    {
      $set: {
        productName:req.body.name,
        quantity: req.body.quantity,
        basePrice: req.body.base,
        sellingPrice: req.body.selling,
        expirationDate: req.body.expiry,
        dateBought: req.body.bought,
        location: req.body.location
      }
    }, (err) => {
      if(err)
        res.send(err);
      //else
        //res.redirect('/inventory')
    });
};

exports.deleteItem = function(req, res) {
  productModel.deleteOne({ _id:req.params.id }, (err) => {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
      //req.flash("success_msg", 'Product added!');
      res.redirect('/inventory')
    }
  });
};

exports.sortByName = function(req,res) {
  productModel.find({})
  .sort({productName: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}

exports.sortByExpiry = function(req,res) {
  productModel.find({})
  .sort({expiryDate: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}

exports.sortByDateBought = function(req,res) {
  productModel.find({})
  .sort({dateBought: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}

exports.sortByQuantity = function(req,res) {
  productModel.find({})
  .sort({quantity: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}

exports.sortBySellingPrice = function(req,res) {
  productModel.find({})
  .sort({sellingPrice: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}

exports.sortByBasePrice = function(req,res) {
  productModel.find({})
  .sort({basePrice: 'ascending'})
  .exec(function(err, results) {
    if(err) {
      //req.flash('error_msg', 'Could not add product. Please Try Again!');
      res.send(err);
    } else {
        var prod = JSON.parse(JSON.stringify(results))
        res.send(prod)
    }
  })
}