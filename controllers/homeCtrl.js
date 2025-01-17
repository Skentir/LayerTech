var mongoose = require('mongoose');
const productModel = require('../models/products');
const stockModel = require('../models/stock');
const transactionModel = require('../models/transactions');

const {validationResult} = require('express-validator');

const async = require('async');

function isExpired(date,) {
    var today = new Date();
    var expiry = new Date(date);
    const diffTime = expiry-today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));   

    if (diffDays <= 14 && diffDays > 0)
        return 1
    else if (diffDays <= 0)
        return 2
    else
        return false
}

exports.getExpired = function(req, res) {
    var expiredProd;
    var expiredRaw;
    var expiredTrans;
    async.parallel({
        prod: function getProductCount(callback) {
            productModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var productCount = 0;
                    expiredProd = 0;
                    var val;
                    results.forEach(function(entry) {
                        val = isExpired(entry.expirationDate)
                        if (val == 1)
                            productCount++;
                        else if(val == 2)
                            expiredProd++;
                    });
                    callback(null, productCount)
                }
            });
        },
        raws: function getProductCount(callback) {
            stockModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var rawCount = 0;
                    expiredRaw = 0;
                    results.forEach(function(entry) {
                        val = isExpired(entry.expirationDate)
                        if (val == 1) 
                            rawCount++;
                        else if(val == 2)
                            expiredRaw++;
                    });
                    callback(null,rawCount)
                }
            });
        },
        trans: function getProductCount(callback) {
            transactionModel.find({}).select('dateDue').then(results=>{
                if (results) {
                    var transCount = 0;
                    expiredTrans = 0;
                    results.forEach(function(entry) {
                        val = isExpired(entry.dateDue)
                        if (val == 1) 
                            transCount++;
                        else if(val == 2)
                            expiredTrans++;
                    });
                    callback(null,transCount)
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
              rawCount : results.raws,
              transCount: results.trans,
              expiredTrans: expiredTrans,
              expiredProd: expiredProd,
              expiredRaw: expiredRaw,
          }
         res.render('dashboard',JSON.parse(JSON.stringify(params)))
          //res.send(params)
      }
    });
}