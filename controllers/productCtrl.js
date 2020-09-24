const bcrypt = require('bcrypt');

const productModel = require('../models/product');

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

  // _id : mongoose.Schema.Types.ObjectId,
  // productName : String,
  // expirationDate : Date,
  // dateBought : Date,
  // quantity : Number,
  // basePrice : Number,
  // sellingPrice : Number

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

exports.editProduct = (req, res, next) => {

  console.log(req.body);

  // get user objects to validate password
  // if match get one and update
  // else redirect to profile page with error message for wrong password

//   _id : mongoose.Schema.Types.ObjectId,
//   stockID :[{type:mongoose.Schema.Types.ObjectID}, ref:'stock'],
//   productName : String,
//   expirationDate : Date,
//   dateAdded : Date,
//   Quantity : Number,
//   basePrice : Number,
//   sellingPrice : Number


  product.getAndUpdate(
    { _id: req.session.product },
    { productName: req.body.productName },
    { new: true },
    (err, result) => {
      if (err) {
        req.flash('error_msg', 'Something happened! Please try again.');
        res.redirect('/inventory');
      } else {

          if (product) {
            bycrypt.compare(password, user.password, (err, result) => {
              if (result) {
                req.session.product = product._id;
                req.session.productName = product.address;
                res.status(200).json({
                  message: "Product Name Successfully Updated",
                })

                res.redirect('/inventory');
              } else {
                req.flash('error_msg', 'Something went wrong!');
                res.redirect('/inventory');
              }
            });
          }

      }

      console.log(result);
      //if successful redirect to profile but send suc message
      // res.status(200).json({
      //    message: "Product Successfully Updated",
      // })
    }
  )
};
