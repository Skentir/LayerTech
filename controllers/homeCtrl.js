var mongoose = require('mongoose');
const productModel = require('../models/products');
const stockModel = require('../models/stock');
const {validationResult} = require('express-validator');
const async = require('async');

exports.getExpired = function(req, res) {
    let productCount;
    let rawCount;
    async.parallel({
        prod: function getProductCount(callback) {
            productModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var parsed = JSON.parse(JSON.stringify(results));
                    console.log("Rsults 1: " + parsed);
                }
            });
        },
        raws: function getProductCount(callback) {
            stockModel.find({}).select('expirationDate').then(results=>{
                if (results) {
                    var parsed = JSON.parse(JSON.stringify(results));
                    console.log("Rsults 2: " + parsed);
                }
            });
        }
    }, function (err, results) {
        if (err) {
         res.send(err)
      } else {
          var final = JSON.parse(JSON.stringify(results));
          console.log("final:" + final)
          //res.render('explore',params);
          res.send(final);
      }
    });
}