var mongoose = require('mongoose');
const productModel = require('../models/products');
const stockModel = require('../models/stock');

const {validationResult} = require('express-validator');

const async = require('async');

function isExpired(date) {
    var today = new Date();
    var expiry = new Date(date);
    const diffTime = Math.abs(expiry - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));   

    if (diffDays >= 14)
        return true
    else
        return false
}

exports.getExpired = function(req, res) {
    async.parallel({
        prod: function getProductCount(callback) {
            productModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var productCount = 0;
                    results.forEach(function(entry) {
                        if (isExpired(entry.expirationDate))
                            productCount++;
                    });
                    callback(null, productCount)
                }
            });
        },
        raws: function getProductCount(callback) {
            stockModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var rawCount = 0;
                    results.forEach(function(entry) {
                        if (isExpired(entry.expirationDate))
                            rawCount++;
                    });
                    callback(null,rawCount)
                }
            });
        }
    }, function (err, results) {
        if (err) {
         res.send(err)
      } else {
          var params = {
              layout: 'main',
              productCount : results.prod,
              rawCount : results.raw
          }
          res.render('dashboard',params)
      }
    });
}