var mongoose = require('mongoose');
const productModel = require('../models/products');
const stockModel = require('../models/stock');
const {validationResult} = require('express-validator');
const async = require('async');
const e = require('express');

function isExpired(expiryDate) {
    var today = new Date()
    var expiration = new Date(expiryDate)
    const diffTime = Math.abs(expiration - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    if (diffDays <= 14)
        return true
    else
        return false
}

exports.getExpired = function(req, res) {
    let productCount;
    let rawCount;
    async.parallel({
        prod: function getProductCount(callback) {
            productModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                        productCount = 0;
                        results.forEach(function(entry) {
                            if (isExpired(entry.expirationDate))
                                productCount++;
                        });
                    callback(null,productCount);
                }
            });
        },
        raws: function getProductCount(callback) {
            stockModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    rawCount = 0;
                    results.forEach(function(entry) {
                        if (isExpired(entry.expirationDate))
                            rawCount++;
                    });
                    callback(null,rawCount);
                }
            });
        }
    }, function (err, results) {
        if (err) {
         res.send(err)
      } else {
          console.log("Here");
          var params = {
             layout: 'main',
             productCount,
             rawCount   
          }
          res.render('dashboard',params);
      }
    });
}