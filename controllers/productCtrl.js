// Edit Function Templates For Edit Products

const bcrypt = require('bcrypt');

const userModel = require('../models/product');

const {validationResult} = require('express-validator');

  // _id : mongoose.Schema.Types.ObjectId,
  // productName : String,
  // expirationDate : Date,
  // dateBought : Date,
  // quantity : Number,
  // basePrice : Number,
  // sellingPrice : Number

exports.getProducts = function(req, res) {
  products.find({})
    .exec(function(err, result){
      if (err)
        res.send(err);
      else if (!result)
        res.send(err);
      else 
        params = {
          layout: 'main',
          productName: result.productName,
          expirationDate: result.expirationDate,
          dateBought: result.dateBought,
          quantity: result.quantity,
          basePrice: result.basePrice,
          sellingPrice:result.sellingPrice,
        }
        res.send(products);
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