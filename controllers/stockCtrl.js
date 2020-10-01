var mongoose = require('mongoose');
const stockModel = require('../models/stock');
const {validationResult} = require('express-validator');
const { raw } = require('body-parser');

exports.getStocks = function(req, res) {
    stockModel.find({})
        .exec(function(err,result) {
            if (err)
                res.send(err)
            else if (!result)
                res.send(err)
            else {
                var obj = JSON.parse(JSON.stringify(result))
                var params = {
                    layout: 'main',
                    stock: obj
                }
                res.render('raw',params)
                //res.send(params)
            }
        })
}


exports.getStockDetails = function(req,res)
{
  var itemID = mongoose.Types.ObjectId(req.params.id);

  stockModel.findById(itemID)
    .exec(function(err,results){
      if (err)
        res.send(err);
      else if (!results)
        res.send(err);
      else
        res.send(results);
    });
}

exports.addStock = function(req, res) {
  const errors = validationResult(req);

  if(errors.isEmpty()){
    const {rawMaterial, supplier, expirationDate, dateBought, quantity, unit, cost, location} = req.body;

    const obj = {
      rawMaterial : rawMaterial,
      supplier : supplier,
      expirationDate : expirationDate,
      dateBought :dateBought,
      quantity: quantity,
      location: location,
      unit: unit,
      cost: cost
    };

    stockModel.create(obj, function(err, result){
      if (err) {
        console.log(err);
        req.flash('error_msg', 'Could not add raw material. Please Try Again!');
        res.redirect('/raw');
      } else {
        req.flash("success_msg", 'Raw material added!');
        res.redirect('/raw');
      }
    })
  } else {
    const messages = errors.array().map((item) => item.msg);

    req.flash('error_msg', messages.join(' '));
    res.redirect('/raw')
  }
};

exports.updateStock = function(req,res) {
  const errors = validationResult(req);

  if(errors.isEmpty()){
    stockModel.findByIdAndUpdate({_id:req.params.id},
      {
        $set: {
          rawMaterial : req.body.raw,
          supplier : req.body.supplier,
          expirationDate : req.body.expiry,
          dateBought : req.body.bought,
          quantity: req.body.quantity,
          location: req.body.location,
          unit: req.body.unit,
          cost: req.body.cost
        }
      }, (err) => {
        if(err)
          res.send(err);
      });
    } else {
      const messages = errors.array().map((item) => item.msg);

      req.flash('error_msg', messages.join(' '));
      res.redirect('/raw')
    }
};

exports.deleteItem = function(req, res) {
  stockModel.deleteOne({ _id:req.params.id }, (err) => {
    if(err) {
      res.send(err);
    } else {
      res.redirect('/raw')
    }
  });
};


exports.sortByRawMaterial = function(req,res) {
  stockModel.find({})
  .sort({rawMaterial: 'ascending'})
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

exports.sortBySupplier = function(req,res) {
  stockModel.find({})
  .sort({supplier: 'ascending'})
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
  stockModel.find({})
  .sort({expirationDate: 'ascending'})
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
  stockModel.find({})
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

exports.sortByCost = function(req,res) {
  stockModel.find({})
  .sort({cost: 'ascending'})
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
  stockModel.find({})
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
