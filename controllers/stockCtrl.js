var mongoose = require('mongoose');
const stockModel = require('../models/stock');
const {validationResult} = require('express-validator');

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
